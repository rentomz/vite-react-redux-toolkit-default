import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import createLogger from "redux-logger";

// const logger = createLogger();
export const Store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger),
})


export type RootState = ReturnType<typeof RootReducer>;

export type AppDispatch = typeof Store.dispatch

export default Store;
