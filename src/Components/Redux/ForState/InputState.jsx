import { createSlice } from "@reduxjs/toolkit";

export const InputState = createSlice({
  name: "InputState",
  initialState: {
    InputState: null,
  },
  reducers: {
    // GET USERS
    getInputState: (state, action) => {
      state.InputState = action.payload
    //   state.InputState= [...state.InputState, action.payload];
    },

  },
});

export const { getInputState } = InputState.actions;
// , clear 

export default InputState.reducer;
