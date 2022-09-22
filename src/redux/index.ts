import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import reducer from "./reducers";

const logger = createLogger({
  collapsed: true
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
