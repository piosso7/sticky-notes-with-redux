import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addStickyReducer = createSlice({
  name: "stickynotes",
  initialState,
  reducers: {
    addSticky: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeSticky: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addSticky, removeSticky } = addStickyReducer.actions;
const reducer = addStickyReducer.reducer;
export default reducer;
