import React from "react";
import styles from "./navbar.module.css";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  const homeRoute = () => {
    navigate("/");
  }
  const historyRoute = () => {
    navigate("/history")
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.innerNavbar}>
        <div className={styles.navbarHeading}>Dictionary App</div>
        <div className={styles.navbarRight}>
          <button className={styles.rightHome} onClick={homeRoute}>Home</button>
          <button className={styles.rightHistory} onClick={historyRoute}>History</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
