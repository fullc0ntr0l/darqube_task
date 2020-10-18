import * as React from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useCurrentViewSearchItems } from "../../hooks/useCurrentViewSearchItems";
import {
  selectCurrentPage,
  selectItemsPerPage,
  setNextPage,
  setPreviousPage,
} from "../../store/news";
import styles from "./pagination.module.css";

interface IProps {
  className?: string;
}

export const Pagination = ({ className }: IProps): JSX.Element | null => {
  const rootClassName = cn(styles.root, className);
  const dispatch = useDispatch();
  const total = useCurrentViewSearchItems().length;
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);

  const handleNextPage = React.useCallback(() => dispatch(setNextPage()), [
    dispatch,
  ]);
  const handlePreviousPage = React.useCallback(
    () => dispatch(setPreviousPage()),
    [dispatch]
  );

  if (total <= itemsPerPage) {
    return null;
  }

  const firstItemIndex = currentPage * itemsPerPage + 1;
  const lastItemIndex = Math.min(firstItemIndex + itemsPerPage - 1, total);

  return (
    <div className={rootClassName}>
      <div className={styles.text}>
        {firstItemIndex}-{lastItemIndex}{" "}
        <span className={styles.textTotal}>out of {total}</span>
      </div>
      <div>
        <input
          type="button"
          className={styles.button}
          value="Previous"
          disabled={firstItemIndex <= 1}
          onClick={handlePreviousPage}
        />
        <input
          type="button"
          className={styles.button}
          value="Next"
          disabled={lastItemIndex >= total}
          onClick={handleNextPage}
        />
      </div>
    </div>
  );
};
