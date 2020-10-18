import * as React from "react";
import cn from "classnames";
import { RouteComponentProps } from "@reach/router";
import { news } from "../../testData";
import { NewsCard } from "../newsCard/newsCard";
import { Pagination } from "../pagination/pagination";
import styles from "./newsView.module.css";

interface IProps extends RouteComponentProps {}

export const NewsView = (props: IProps): JSX.Element => {
  const paginatedNews = news.slice(0, 7);

  return (
    <div className={styles.root}>
      {paginatedNews.map((data, index) => {
        const isLatest = index === 0;
        const className = cn(styles.card, isLatest && styles.firstCard);

        return (
          <NewsCard
            key={data.id}
            data={data}
            latest={isLatest}
            className={className}
          />
        );
      })}
      <Pagination />
    </div>
  );
};
