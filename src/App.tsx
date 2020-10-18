import React from "react";
import { RouteComponentProps, Router } from "@reach/router";
import styles from "./App.module.css";
import { BookmarksView } from "./components/bookmarksView/bookmarksView";
import { NewsView } from "./components/newsView/newsView";
import { NavigationLink } from "./components/navigationLink/navigationLink";
import { SearchInput } from "./components/searchInput/searchInput";
import { LatestNewsView } from "./components/latestNewsView/latestNewsView";

interface IMainViewProps extends RouteComponentProps {
  children: React.ReactNode;
}

const PAGES = [
  { path: "/", component: NewsView, label: "News" },
  { path: "/bookmarks", component: BookmarksView, label: "Bookmarks" },
];

export const App = () => {
  return (
    <Router>
      <MainView path="/">
        {PAGES.map((page) =>
          React.createElement(page.component, {
            key: page.label,
            path: page.path,
          })
        )}
      </MainView>
    </Router>
  );
};

const MainView = (props: IMainViewProps) => {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <div>
          {PAGES.map((page) => (
            <NavigationLink
              key={page.label}
              to={page.path}
              label={page.label}
            />
          ))}
        </div>
        <SearchInput className={styles.search} />
      </div>
      <div className={styles.content}>
        <LatestNewsView className={styles.latestNews} />
        {props.children}
      </div>
    </div>
  );
};
