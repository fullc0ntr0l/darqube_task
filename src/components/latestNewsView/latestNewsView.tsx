import * as React from "react";
import cn from "classnames";
import { news } from "../../testData";
import { NewsCard } from "../newsCard/newsCard";
import styles from "./latestNewsView.module.css";

interface IProps {
  className?: string;
}

export const LatestNewsView = ({ className }: IProps): JSX.Element => {
  const data = news[0];
  const rootClassName = cn(styles.root, className);

  return <NewsCard className={rootClassName} data={data} latest />;
};
