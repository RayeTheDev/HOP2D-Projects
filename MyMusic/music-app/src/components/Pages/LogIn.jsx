import { Button, Container } from "react-bootstrap";
import styles from "../assets/login.module.css";
import { BsMusicNoteList } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import axios from "axios";
import { useState } from "react";

export const LogIn = () => {
  const [nameI, setNameI] = useState();
  const [passwordI, setPasswordI] = useState();
  let name = useRef();
  let password = useRef();
  const baseUrl = "http://localhost:8000";


  return (
    <div className={styles.Container}>
      {" "}
      {/* <Container> */}{" "}
      <Link to="/">
        <div className={styles.logoCont}>
          <BsMusicNoteList className={styles.logo} />
          <span className={styles.logoText}>Invader</span>
        </div>
      </Link>
      <div className={styles.borderContainer}>
        <div className={styles.section1}>
          <span className={styles.section1Texts}>
            Email address or username
          </span>
          <input ref={name} className={styles.inp}></input>
        </div>
        <div className={styles.section1}>
          <span className={styles.section1Texts}>Password</span>
          <input ref={password} className={styles.inp}></input>
        </div>
        <span className={styles.section2Texts}>Forget your password? </span>
        <div className={styles.section2}>
          <div className={styles.checkCont}>
            <input className={styles.check} type="checkbox" />
            <span className={styles.botText}>Remember me</span>
          </div>

          <Button
            // onClick={() => SetValue()}
            className={styles.but}
            variant="warning">
            LOG IN
          </Button>
        </div>
        <hr></hr>
        <div className={styles.section3}>
          <span className={styles.section3Text}>Don't have an account? </span>
          <Link style={{width: "100%"}} to="/signup">
           <Button className={styles.but2} variant="light">
            SIGN UP FOR INVADER
          </Button>
          </Link>
         
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
};
