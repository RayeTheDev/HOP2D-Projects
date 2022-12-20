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
  const baseUrl = "http://localhost:9000";

  useEffect(() => {
    if (nameI != null && passwordI != null) {
      axios
        .post(baseUrl + "/users", { email: nameI, password: passwordI })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [nameI, passwordI]);

  const SetValue = () => {
    setNameI(name.current.value);
    setPasswordI(password.current.value);
    console.log(name.current.value);
    console.log(password.current.value);
  };

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
            onClick={() => SetValue()}
            className={styles.but}
            variant="warning">
            LOG IN
          </Button>
        </div>
        <hr></hr>
        <div className={styles.section3}>
          <span className={styles.section3Text}>Don't have an account? </span>
          <Button className={styles.but2} variant="light">
            SIGN UP FOR INVADER
          </Button>
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
};
