import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import styles from "./historydetails.module.css";
import { fetchWordDetailsThunk } from "../store/wordThunk";
import { setWordDetails } from "../store/wordDetailsSlice";
import { useParams, useLocation } from "react-router-dom";
const HistoryDetails = () => {
  const { text } = useParams();

  const wordDetails = useSelector((state) => state.wordDetails);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { state } = useLocation();

  useEffect(() => {
    const getData = async () => {
      // setLoading(true); // Set loading to true before fetching details
      try {
        setLoading(true);
        const receivedWord = state && state.text;
        const wordDetailsResponse = await dispatch(
          fetchWordDetailsThunk(receivedWord)
        );
        dispatch(setWordDetails(wordDetailsResponse));
      } catch (error) {
        console.error("Error fetching word details", error);
      }
    };
    getData();
  }, [state]);

  useEffect(() => {
    // console.log("word details resp -> " ,wordDetails)
    // setLoading(true)
    if (!isEmptyObject(wordDetails)) {
      // console.log("word details from condition", wordDetails);
      // setLoading(false);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      setResult([wordDetails]);
    }
  }, [wordDetails]);

  function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
  }
  console.log("loading value is ", loading);

  return (
    <div>
      <Navbar />
      {/* {console.log(wordDetails)} */}
      {/* {console.log("result -> ",result)} */}
      {loading ? (
        <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
      </div>
      ) : (
        <div className={styles.resultDiv}>
          {result.length > 0 && result[0] !== undefined && result[0] !== {} && (
            <div>
              {/* {console.log("result running from inside return condn",result)} */}
              {result[0].map((item, index) => (
                <div key={index}>
                  {/* {console.log("item ->", item[0])} */}
                  <h1>{item.word}</h1>
                  {item.phonetic && <div>{item.phonetic}</div>}
                  {/* for conditional audio */}
                  {item.phonetics.length > 0 &&
                    item.phonetics.map((val, i) => {
                      // {console.log("phonetics" , val)}
                      if (val.audio) {
                        // {console.log("val audio running")}
                        return (
                          <div key={i} className={styles.audioDiv}>
                            <audio controls key={i}>
                              <source src={val.audio} type="audio/mpeg" />
                              Your browser does not support the audio element.
                            </audio>
                          </div>
                        );
                      }
                    })}
                  {/* for conditional definitions */}
                  {item.meanings.length > 0 &&
                    item.meanings.map((val, i) => {
                      return (
                        <div key={i}>
                          <h3>{val.partOfSpeech}</h3>
                          {/* {val.antonyms.length > 0 &&val.antonyms.map((def, i) => {
                                return(
                                    <div>{def.definition}</div>
                                )
                            })} */}
                          {val.definitions.length > 0 &&
                            val.definitions.map((def, i) => {
                              return (
                                <ul>
                                  <li>{def.definition}</li>
                                </ul>
                              );
                            })}
                        </div>
                      );
                    })}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HistoryDetails;
