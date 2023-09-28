import { createSlice } from "@reduxjs/toolkit";

const wordSlice = createSlice({
  name: "words",
  initialState: [],
  reducers: {
    addWord: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addWord } = wordSlice.actions;
export default wordSlice.reducer;
