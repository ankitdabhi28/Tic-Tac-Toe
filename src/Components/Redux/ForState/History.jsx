import { createSlice } from "@reduxjs/toolkit";

export const History = createSlice({
  name: "History",
  initialState: {
    History: [Array(9).fill(null)],
  },
  reducers: {
    // GET USERS
    getHistory: (state, action) => {
      state.History = action.payload
    //   state.History= [...state.History, action.payload];
    },

  },
});

export const { getHistory } = History.actions;
// , clear 

export default History.reducer;
