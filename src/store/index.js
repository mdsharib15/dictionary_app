
import { configureStore } from '@reduxjs/toolkit';
import wordReducer from './wordSlice';
import wordDetailsReducer from './wordDetailsSlice';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    words: wordReducer,
    wordDetails: wordDetailsReducer,
  },
  middleware: [thunk],
});

export default store;
