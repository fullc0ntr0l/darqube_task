import * as React from "react";
import { useSelector } from "react-redux";
import {
  selectCurrentViewAllItems,
  selectIsSearchTriggered,
  selectLatestNews,
  selectSearchKey,
} from "../store/news";

export const useCurrentViewSearchItems = () => {
  const allItems = useSelector(selectCurrentViewAllItems);
  const latestNews = useSelector(selectLatestNews);
  const searchKey = useSelector(selectSearchKey);
  const isSearchTriggered = useSelector(selectIsSearchTriggered);
  const filteredItems = React.useMemo(
    () =>
      allItems.filter((item) => {
        if (item.id === latestNews?.id) {
          return false;
        }

        if (!isSearchTriggered) {
          return true;
        }

        return (
          item.headline.includes(searchKey) || item.summary.includes(searchKey)
        );
      }),
    [allItems, isSearchTriggered, latestNews, searchKey]
  );

  return filteredItems;
};
