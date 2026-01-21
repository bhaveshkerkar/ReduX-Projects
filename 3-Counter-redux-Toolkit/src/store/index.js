import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice from "./Counter.js";
import privacySlice from "./privacy.js";

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export default counterStore;
