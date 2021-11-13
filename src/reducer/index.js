import { configureStore } from "@reduxjs/toolkit";
import computerReducer from "./store";

const store = configureStore({
  reducer: {
    store: computerReducer,
  },
});

export default store;
