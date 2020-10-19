import * as React from "react";
import { format } from "date-fns";
import cn from "classnames";
import styles from "./newsCard.module.css";
import upperRightArrow from "../../assets/upperRightArrow.svg";
import bookmarkAdd from "../../assets/bookmarkAdd.svg";
import bookmarkAdded from "../../assets/bookmarkAdded.svg";
import rightArrow from "../../assets/rightArrow.svg";
import {
  addToBookmark,
  INews,
  removeFromBookMark,
  selectBookmarkedNews,
} from "../../store/news";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "../link/link";

interface IProps {
  data: INews;
  latest?: boolean;
  className?: string;
}

export const NewsCard = ({ data, className, latest }: IProps): JSX.Element => {
  const rootClassName = cn(styles.root, className);
  const dispatch = useDispatch();
  const bookmarkedNews = useSelector(selectBookmarkedNews);
  const isBookmarked = React.useMemo(() => !!bookmarkedNews[data.id], [
    bookmarkedNews,
    data.id,
  ]);
  const date = React.useMemo(() => format(data.datetime * 1000, "d MMM"), [
    data.datetime,
  ]);

  const handleAddBookmark = React.useCallback(
    (event: React.MouseEvent<HTMLImageElement>) => {
      event.preventDefault();

      dispatch(addToBookmark(data));
    },
    [data, dispatch]
  );
  const handleRemoveBookmark = React.useCallback(
    (event: React.MouseEvent<HTMLImageElement>) => {
      event.preventDefault();

      dispatch(removeFromBookMark(data.id));
    },
    [data.id, dispatch]
  );

  return (
    <div className={rootClassName}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${data.image})` }}
      />
      <div className={styles.related}>{data.related}</div>
      {latest && <div className={styles.latestBadge}>Latest research</div>}
      <div className={styles.headlineContainer}>
        <Link url={data.url}>
          <div className={styles.headline}>{data.headline}</div>
          <div className={styles.summary}>{data.summary}</div>
        </Link>
      </div>
      <div className={styles.footer}>
        <div className={styles.leftFooter}>
          {latest && (
            <>
              <Link url={data.url} className={styles.leftFooterLink}>
                <img
                  src={rightArrow}
                  alt="Read the research"
                  className={styles.researchIcon}
                />
                <div className={styles.researchText}>Read the research</div>
              </Link>
              <div className={styles.separator} />
            </>
          )}
          <div className={styles.date}>{date}</div>
          <div className={styles.separator} />
          <div className={styles.source} title={data.source}>
            {data.source}
          </div>
        </div>
        <div className={styles.rightFooter}>
          <Link url={data.url}>
            <img
              src={upperRightArrow}
              alt="Go to url"
              className={styles.icon}
            />
          </Link>
          {isBookmarked ? (
            <img
              src={bookmarkAdded}
              alt="Remove from bookmarks"
              className={styles.icon}
              onClick={handleRemoveBookmark}
            />
          ) : (
            <img
              src={bookmarkAdd}
              alt="Add to bookmarks"
              className={styles.icon}
              onClick={handleAddBookmark}
            />
          )}
        </div>
      </div>
    </div>
  );
};
