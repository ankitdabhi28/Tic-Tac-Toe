import { createSlice } from "@reduxjs/toolkit";

export const Square = createSlice({
  name: "Square",
  initialState: {
    Square:null,
  },
  reducers: {
    // GET USERS
    getSquare: (state, action) => {
      state.Square = action.payload
    //   state.Square= [...state.Square, action.payload];
    },

  },
});

export const { getSquare } = Square.actions;
// , clear 

export default Square.reducer;
