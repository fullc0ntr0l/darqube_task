import * as React from "react";
import { useSelector } from "react-redux";
import { selectCurrentPage, selectItemsPerPage } from "../store/news";
import { useCurrentViewSearchItems } from "./useCurrentViewSearchItems";

export const useCurrentViewPaginatedItems = () => {
  const allItems = useCurrentViewSearchItems();
  const itemsPerPage = useSelector(selectItemsPerPage);
  const currentPage = useSelector(selectCurrentPage);

  const paginatedItems = React.useMemo(() => {
    const firstIndex = currentPage * itemsPerPage;
    const lastIndex = firstIndex + itemsPerPage;

    return allItems.slice(firstIndex, lastIndex);
  }, [allItems, currentPage, itemsPerPage]);

  return paginatedItems;
};
