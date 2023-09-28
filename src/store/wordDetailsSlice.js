
import { createSlice } from '@reduxjs/toolkit';

const wordDetailsSlice = createSlice({
  name: 'wordDetails',
  initialState: {},
  reducers: {
    setWordDetails: (state, action) => {
      return action.payload;
    },
  },
});

export const { setWordDetails } = wordDetailsSlice.actions;
export default wordDetailsSlice.reducer;
