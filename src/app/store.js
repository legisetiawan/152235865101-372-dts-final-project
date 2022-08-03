import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { newsApi } from "../services/NewsAPI";

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(newsApi.middleware);
  },
});