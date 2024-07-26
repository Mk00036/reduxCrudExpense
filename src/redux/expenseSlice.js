import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expense",
  initialState: [
    {
      category: "Groceries",
      amount: 100.0,
      date: "2024-07-01",
      description: "Weekly grocery shopping",
      paymentMethod: "Credit Card",
    },
    {
      category: "Rent",
      amount: 1500.0,
      date: "2024-07-01",
      description: "Monthly apartment rent",
      paymentMethod: "Bank Transfer",
    },
    {
      category: "Utilities",
      amount: 200.0,
      date: "2024-07-02",
      description: "Electricity and water bill",
      paymentMethod: "Credit Card",
    },
    {
      category: "Transportation",
      amount: 50.0,
      date: "2024-07-03",
      description: "Gas for the car",
      paymentMethod: "Cash",
    },
  ],
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    deleteExpense: (state, action) => {
        // action.payload should be the index of the expense to delete
        const index = action.payload;
        if (index >= 0 && index < state.length) {
          state.splice(index, 1);
        }
      },
      updateExpense: (state, action) => {
        const { index, updatedData } = action.payload;
        if (index >= 0 && index < state.length) {
          state[index] = { ...state[index], ...updatedData };
        }
      },
   
  },
});

export const { addExpense, deleteExpense, updateExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
