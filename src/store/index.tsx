import { configureStore } from "@reduxjs/toolkit";
import FirstStore from "./FirstStore";

export const store = configureStore({
  reducer: {
    FIRST: FirstStore,
  },
  devTools: true,
});
