import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from ".";

export interface INews {
  id: number;
  category: string;
  datetime: number;
  headline: string;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
}

export enum NewsView {
  All = "All",
  Bookmarks = "Bookmarks",
}

export interface IState {
  isFetching: boolean;
  fetchError: Error | undefined;
  fetchedNews: INews[];
  bookmarkedNews: Record<number, INews>;
  currentView: NewsView;
  searchKey: string;
  searchMinLength: number;
  itemsPerPage: number;
  currentPage: number;
}

const initialState: IState = {
  isFetching: false,
  fetchError: undefined,
  fetchedNews: [],
  bookmarkedNews: {},
  currentView: NewsView.All,
  searchKey: "",
  searchMinLength: 3,
  itemsPerPage: 6,
  currentPage: 0,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },
    setFetchError: (state, action: PayloadAction<Error | undefined>) => {
      state.fetchError = action.payload;
    },
    setFetchedNews: (state, action: PayloadAction<INews[]>) => {
      state.fetchedNews = action.payload;
    },
    setCurrentView: (state, action: PayloadAction<NewsView>) => {
      if (state.currentView !== action.payload) {
        state.currentView = action.payload;
        state.searchKey = "";
        state.currentPage = 0;
      }
    },
    setSearchKey: (state, action: PayloadAction<string>) => {
      state.searchKey = action.payload;
      state.currentPage = 0;
    },
    setNextPage: (state) => {
      state.currentPage += 1;
    },
    setPreviousPage: (state) => {
      state.currentPage -= 1;
    },
    addToBookmark: (state, action: PayloadAction<INews>) => {
      const newItem = action.payload;

      state.bookmarkedNews[newItem.id] = newItem;
    },
    removeFromBookMark: (state, action: PayloadAction<number>) => {
      delete state.bookmarkedNews[action.payload];
    },
  },
});

export const {
  setIsFetching,
  setFetchError,
  setFetchedNews,
  setCurrentView,
  setSearchKey,
  setNextPage,
  setPreviousPage,
  addToBookmark,
  removeFromBookMark,
} = newsSlice.actions;

export const fetchNews = (): AppThunk => async (dispatch) => {
  dispatch(setIsFetching(true));
  dispatch(setFetchError());

  try {
    const response = await fetch(
      "https://finnhub.io/api/v1/company-news?token=bu68t6v48v6tafi4h36g&amp;symbol=AAPL&amp;from=2020-01-01"
    );

    if (!response.ok) {
      const message = await response.text();

      throw Error(message);
    }

    const data = await response.json();

    dispatch(setFetchedNews(data));
    dispatch(setIsFetching(false));
  } catch (error) {
    dispatch(setFetchError(error));
    dispatch(setIsFetching(false));
  }
};

// Selectors
export const selectIsFetching = (state: RootState) => state.news.isFetching;
export const selectFetchedNews = (state: RootState) => state.news.fetchedNews;
export const selectBookmarkedNews = (state: RootState) =>
  state.news.bookmarkedNews;
export const selectFetchError = (state: RootState) => state.news.fetchError;
export const selectLatestNews = (state: RootState) => state.news.fetchedNews[0];
export const selectCurrentView = (state: RootState) => state.news.currentView;
export const selectSearchKey = (state: RootState) => state.news.searchKey;
export const selectIsSearchTriggered = (state: RootState) =>
  state.news.searchKey.length >= state.news.searchMinLength;
export const selectCurrentPage = (state: RootState) => state.news.currentPage;
export const selectItemsPerPage = (state: RootState) => state.news.itemsPerPage;
export const selectCurrentViewAllItems = (state: RootState) =>
  state.news.currentView === NewsView.Bookmarks
    ? Object.values(state.news.bookmarkedNews)
    : state.news.fetchedNews;
