// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./expenseSlice";

const store = configureStore({
  reducer: {
    expense: expensesReducer,
  },
});

export default store;
