import { createSlice } from "@reduxjs/toolkit";

const colors = ["red", "blue", "green", "yellow", "skyblue", "orange", "olive green"];

const colorSlice = createSlice({
  name: "color",
  initialState: {
    currentColor: "red",
    colors: colors,   
  },
  reducers: {
    changeColor: (state, action) => {
      state.currentColor = action.payload;
    },
  },
});

export const { changeColor } = colorSlice.actions;
export default colorSlice.reducer;