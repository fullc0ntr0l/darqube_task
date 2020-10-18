import * as React from "react";
import styles from "./pagination.module.css";

export const Pagination = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className={styles.text}>
        1-6 <span className={styles.textTotal}>out of 24</span>
      </div>
      <div>
        <input type="button" className={styles.button} value="Previous" />
        <input type="button" className={styles.button} value="Next" />
      </div>
    </div>
  );
};
