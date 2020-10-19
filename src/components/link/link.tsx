import * as React from "react";
import cn from "classnames";
import styles from "./link.module.css";

interface IProps {
  url: string;
  children: React.ReactNode;
  className?: string;
}

export const Link = ({ url, children, className }: IProps): JSX.Element => {
  const rootClassName = cn(styles.root, className);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={rootClassName}
    >
      {children}
    </a>
  );
};
