import * as React from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import styles from "./searchInput.module.css";
import { selectSearchKey, setSearchKey } from "../../store/news";

interface IProps {
  className?: string;
}

export const SearchInput = ({ className }: IProps): JSX.Element => {
  const inputClassName = cn(styles.input, className);
  const dispatch = useDispatch();
  const searchKey = useSelector(selectSearchKey);

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchKey(event.currentTarget.value));
    },
    [dispatch]
  );

  return (
    <input
      type="text"
      placeholder="Search"
      className={inputClassName}
      value={searchKey}
      onChange={handleChange}
    />
  );
};
