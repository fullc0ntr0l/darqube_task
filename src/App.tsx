import React from "react";
import { RouteComponentProps, Router } from "@reach/router";
import styles from "./App.module.css";
import { BookmarksView } from "./components/bookmarksView";
import { NewsView } from "./components/newsView";
import { NavigationLink } from "./components/navigationLink";
import { SearchInput } from "./components/searchInput";
import { LatestNewsView } from "./components/latestNewsView";

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
        <SearchInput />
      </div>
      <div className={styles.content}>
        <LatestNewsView />
        {props.children}
      </div>
    </div>
  );
};
