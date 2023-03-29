import { createSlice } from "@reduxjs/toolkit";

export const CurrentMove = createSlice({
  name: "CurrentMove",
  initialState: {
    CurrentMove: 0,
  },
  reducers: {
    // GET USERS
    getCurrentMove: (state, action) => {
      state.CurrentMove = action.payload
    //   state.CurrentMove= [...state.CurrentMove, action.payload];
    },

  },
});

export const { getCurrentMove } = CurrentMove.actions;
// , clear 

export default CurrentMove.reducer;
