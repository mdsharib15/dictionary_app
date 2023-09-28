import React, { useState } from 'react'
import Navbar from './Navbar'
import { useSelector, useDispatch } from 'react-redux';
import { fetchWordDetailsThunk } from '../store/wordThunk';
import { setWordDetails } from '../store/wordDetailsSlice';
import { useNavigate } from 'react-router';
import styles from "./history.module.css"


const History = () => {
  const words = useSelector((state) => state.words);
  const dispatch = useDispatch();
const navigate = useNavigate();
const [loading, setLoading] = useState(false); 


  const handleWordClick = (word) => {
    
    // dispatch(fetchWordDetailsThunk(word));
    
    navigate('/historyDetails', { state: { text: word } });
    
  };
  return (
    <>
    <Navbar />
    <h2>Words History</h2>
      <ul>
        {words.map((word, index) => (
          <li key={index} className={styles.list} onClick={() => handleWordClick(word)}>
            {word}
          </li>
        ))}
      </ul>
    </>
  )
}

export default History