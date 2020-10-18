import * as React from "react";
import { NewsCard } from "../newsCard/newsCard";
import { Pagination } from "../pagination/pagination";
import { useCurrentViewPaginatedItems } from "../../hooks/useCurrentViewPaginatedItems";
import styles from "./newsView.module.css";

export const NewsView = (): JSX.Element => {
  const currentItems = useCurrentViewPaginatedItems();

  return (
    <div className={styles.root}>
      {currentItems.length === 0 ? (
        <div className={styles.emptyPlaceholder}>No items</div>
      ) : (
        <>
          {currentItems.map((data) => (
            <NewsCard key={data.id} data={data} className={styles.card} />
          ))}
          <Pagination />
        </>
      )}
    </div>
  );
};
