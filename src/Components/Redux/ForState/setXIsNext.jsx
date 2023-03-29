import { createSlice } from "@reduxjs/toolkit";

export const XisNext = createSlice({
  name: "XisNext",
  initialState: {
    XisNext: true,
  },
  reducers: {
    // GET USERS
    getXisNext: (state, action) => {
      state.XisNext = action.payload
    //   state.XisNext= [...state.XisNext, action.payload];
    },

  },
});

export const { getXisNext } = XisNext.actions;
// , clear 

export default XisNext.reducer;
