import * as React from "react";
import styles from "./searchInput.module.css";

export const SearchInput = (): JSX.Element => {
  return <input type="text" placeholder="Search" className={styles.input} />;
};
