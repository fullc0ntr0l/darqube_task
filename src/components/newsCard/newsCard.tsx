import * as React from "react";
import { format } from "date-fns";
import cn from "classnames";
import styles from "./newsCard.module.css";
import upperRightArrow from "../../assets/upperRightArrow.svg";
import bookmarkAdd from "../../assets/bookmarkAdd.svg";
import rightArrow from "../../assets/rightArrow.svg";
import { INews } from "../../store/news";

interface IProps {
  data: INews;
  latest?: boolean;
  className?: string;
}

export const NewsCard = ({ data, className, latest }: IProps): JSX.Element => {
  const rootClassName = cn(styles.root, className);
  const date = React.useMemo(() => format(data.datetime * 1000, "d MMM"), [
    data.datetime,
  ]);

  return (
    <div className={rootClassName}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${data.image})` }}
      />
      <div className={styles.related}>{data.related}</div>
      {latest && <div className={styles.latestBadge}>Latest research</div>}
      <div className={styles.headlineContainer}>
        <div className={styles.headline}>{data.headline}</div>
        <div className={styles.summary}>{data.summary}</div>
      </div>
      <div className={styles.footer}>
        <div className={styles.leftFooter}>
          {latest && (
            <>
              <img
                src={rightArrow}
                alt="Read the research"
                className={styles.researchIcon}
              />
              <div className={styles.researchText}>Read the research</div>
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
          <img src={upperRightArrow} alt="Go to url" className={styles.icon} />
          <img
            src={bookmarkAdd}
            alt="Add to bookmarks"
            className={styles.icon}
          />
        </div>
      </div>
    </div>
  );
};
