import * as React from "react";
import cn from "classnames";
import styles from "./searchInput.module.css";

interface IProps {
  className?: string;
}

export const SearchInput = ({ className }: IProps): JSX.Element => {
  const inputClassName = cn(styles.input, className);

  return <input type="text" placeholder="Search" className={inputClassName} />;
};
