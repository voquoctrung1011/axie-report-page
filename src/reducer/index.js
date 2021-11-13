import { configureStore } from "@reduxjs/toolkit";
import reportReducer from "./store";

const store = configureStore({
  reducer: {
    store: reportReducer,
  },
});

export default store;
