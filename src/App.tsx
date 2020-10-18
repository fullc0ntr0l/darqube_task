import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./App.module.css";
import { NewsView } from "./components/newsView/newsView";
import { NavigationLink } from "./components/navigationLink/navigationLink";
import { SearchInput } from "./components/searchInput/searchInput";
import { LatestNewsView } from "./components/latestNewsView/latestNewsView";
import { Spinner } from "./components/spinner/spinner";
import {
  fetchNews,
  selectIsFetching,
  NewsView as StateNewsView,
  selectFetchError,
} from "./store/news";

export const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <div>
          <NavigationLink label="News" viewName={StateNewsView.All} />
          <NavigationLink
            label="Bookmarks"
            viewName={StateNewsView.Bookmarks}
          />
        </div>
        <SearchInput className={styles.search} />
      </div>
      <div className={styles.content}>
        <Content />
      </div>
    </div>
  );
};

const Content = (): JSX.Element => {
  const isFetching = useSelector(selectIsFetching);
  const fetchError = useSelector(selectFetchError);

  if (isFetching) {
    return (
      <div className={styles.spinnerContainer}>
        <Spinner />
      </div>
    );
  }

  if (fetchError) {
    return <div>{fetchError.message}</div>;
  }

  return (
    <>
      <LatestNewsView className={styles.latestNews} />
      <NewsView />
    </>
  );
};
