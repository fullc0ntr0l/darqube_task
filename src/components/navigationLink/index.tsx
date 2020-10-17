import * as React from "react";
import cn from "classnames";
import { Link, useMatch } from "@reach/router";
import styles from "./index.module.css";

interface IProps {
  to: string;
  label: string;
}

export const NavigationLink = ({ to, label }: IProps): JSX.Element => {
  const match = useMatch(to);
  const className = cn(styles.link, match && styles.selectedLink);

  return (
    <Link to={to} className={className}>
      {label}
    </Link>
  );
};
