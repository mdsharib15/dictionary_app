import axios from "axios";
import { setWordDetails } from "./wordDetailsSlice";

const fetchWordDetails = async (searchText) => {
  const res = await axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`
  );

  return [res.data[0]];
};

export const fetchWordDetailsThunk = (word) => async (dispatch) => {
  try {
    const wordDetails = await fetchWordDetails(word);
    console.log("Word Details Response:", wordDetails);
    // dispatch({ type: 'SET_WORD_DETAILS', payload: wordDetails });
    dispatch(setWordDetails(wordDetails));
  } catch (error) {
    console.error("Error fetching word details", error);
  }
};
