import { configureStore } from "@reduxjs/toolkit";
import firstSlice from "./firstSlice";

const store = configureStore({
  reducer: {
    firstSlice,
  },
});

export default store;
