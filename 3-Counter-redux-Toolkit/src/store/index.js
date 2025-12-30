import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";

const INIRIAL_VALUE = {
  counter: 0,
  privacy: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state, action) => {
      state.counterVal++;
    },
    decrement: (state, action) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += action.payload;
    },
    subtract: (state, action) => {
      state.counterVal -= action.payload;
    },
  },
});

const counterReducer = (store = INIRIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    return { ...store, counter: store.counter + Number(action.payload.num) };
  } else if (action.type === "SUBTRACT") {
    return {
      ...store,
      counter: store.counter - Number(action.payload.num),
    };
  } else if (action.type === "PRIVACY_TOGGLE") {
    return { ...store, privacy: !store.privacy };
  }
  return store;
};
const counterStore = configureStore({ reducer: counterReducer });

export default counterStore;
