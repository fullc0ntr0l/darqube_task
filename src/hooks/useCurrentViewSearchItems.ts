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

        const searchKeyLowerCase = searchKey.toLowerCase();

        return (
          item.headline.toLowerCase().includes(searchKeyLowerCase) ||
          item.summary.includes(searchKeyLowerCase)
        );
      }),
    [allItems, isSearchTriggered, latestNews, searchKey]
  );

  return filteredItems;
};
