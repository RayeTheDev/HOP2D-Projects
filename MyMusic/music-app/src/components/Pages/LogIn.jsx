import { Alert, Button, Container, ToastContainer } from "react-bootstrap";
import styles from "../assets/login.module.css";
import { BsMusicNoteList } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import axios from "axios";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";

export const LogIn = () => {
  const [emailI, setEmailI] = useState("");
  const [passwordI, setPasswordI] = useState("");
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [error, setError] = useState("");

  const baseUrl = "http://localhost:8000";

  const onSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth()
    signInWithEmailAndPassword(auth, emailI, passwordI)
    .then((userCredential) => {
      const user = userCredential.user;
      navigate("/");
    })
    .catch((error) => {
      const errorCode = error.code;
       setError(error.message)
    });
    console.log(currentUser.password);
    // if (emailI == currentUser.email) {
    //   navigate("/");
    //   console.log("Op");
    // } else {
    //   setError("Failed to login");
    // }
  };

  return (
    <div className={styles.Container}>
      {error &&  <Alert variant="danger">{error}</Alert>}
      <ToastContainer /> {/* <Container> */}{" "}
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
          <input
            onChange={(e) => setEmailI(e.target.value)}
            value={emailI}
            className={styles.inp}
          ></input>
        </div>
        <div className={styles.section1}>
          <span className={styles.section1Texts}>Password</span>
          <input
            onChange={(e) => setPasswordI(e.target.value)}
            value={passwordI}
            className={styles.inp}
            type="password"
          ></input>
        </div>
        <span className={styles.section2Texts}>Forget your password? </span>
        <div className={styles.section2}>
          <div className={styles.checkCont}>
            <input className={styles.check} type="checkbox" />
            <span className={styles.botText}>Remember me</span>
          </div>

          <Button onClick={onSubmit} className={styles.but} variant="warning">
            LOG IN
          </Button>
        </div>
        <hr></hr>
        <div className={styles.section3}>
          <span className={styles.section3Text}>Don't have an account? </span>
          <Link style={{ width: "100%" }} to="/signup">
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
