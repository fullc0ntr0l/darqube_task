import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { BOOKMARKS_STORAGE_KEY, newsSlice } from "./news";

export const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

store.subscribe(() => {
  const { bookmarkedNews } = store.getState().news;

  localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(bookmarkedNews));
});
