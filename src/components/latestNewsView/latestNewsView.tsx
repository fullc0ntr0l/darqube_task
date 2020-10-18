import * as React from "react";
import cn from "classnames";
import { NewsCard } from "../newsCard/newsCard";
import styles from "./latestNewsView.module.css";
import { useSelector } from "react-redux";
import { selectLatestNews } from "../../store/news";

interface IProps {
  className?: string;
}

export const LatestNewsView = ({ className }: IProps): JSX.Element | null => {
  const latestNews = useSelector(selectLatestNews);
  const rootClassName = cn(styles.root, className);

  if (!latestNews) {
    return null;
  }

  return <NewsCard className={rootClassName} data={latestNews} latest />;
};
