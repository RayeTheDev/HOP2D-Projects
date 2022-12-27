import { Button, Container, Form } from "react-bootstrap";
import styles from "../assets/signup.module.css";
import { BsMusicNoteList } from "react-icons/bs";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { auth } from "../../config/firebase";
import { useAuth } from "../contexts/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const SignUp = () => {
  const [emailI, setEmailI] = useState("");
  const [passwordI, setPasswordI] = useState("");
  const [error, setError] = useState("");
  const [app, setApp] = useState(false);
  const { signup, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let nameRef = useRef();
  let passwordRef = useRef();
  const baseUrl = "http://localhost:8001";

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signup(nameRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }
  // useEffect(() => {
  //   if (nameI != null && passwordI != null) {
  //     axios
  //       .post(baseUrl + "/users", { email: nameI, password: passwordI })
  //       .then((res) => {
  //         //   console.log(res.data);
  //         setData(res.data);
  //       })
  //       .catch((error) => {
  //         toast.error("Email or password is incorrect");
  //       });
  //   }
  // }, [nameI, passwordI]);

  const onSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, emailI, passwordI)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })

      .catch((error) => {
        const errorCode = error.errorCode;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  console.log(currentUser);

  return (
    <div className={styles.Container}>
      {" "}
      {/* <ToastContainer /> */}
      {error && toast.error("DONT MATCH")}
      <Link to="/">
        <div className={styles.logoCont}>
          <BsMusicNoteList className={styles.logo} />
          <span className={styles.logoText}>Invader</span>
        </div>
      </Link>
      {currentUser && currentUser.email}
      {/* {currentUser && currentUser.password} */}
      <Form className={styles.borderContainer}>
        <div className={styles.topCont}>
          <span>Sign Up</span>
        </div>
        <div className={styles.section1}>
          <span className={styles.section1Texts}>Email address</span>
          <input
            placeholder="Your email "
            value={emailI}
            onChange={(e) => setEmailI(e.target.value)}
            required
            className={styles.inp}
          ></input>
        </div>
        <div className={styles.section1}>
          <span className={styles.section1Texts}>Password</span>
          <input
            type="password"
            placeholder="Your password"
            required
            onChange={(e) => setPasswordI(e.target.value)}
            value={passwordI}
            className={styles.inp}
          ></input>
        </div>

        <div className={styles.section2}>
          <Button onClick={onSubmit} className={styles.but} variant="warning">
            SIGN UP
          </Button>
        </div>
        <hr></hr>
        <div className={styles.section3}>
          <span className={styles.botText}>
            Have an account?
            <Link style={{ marginLeft: "4px" }} to="/login">
              login
            </Link>
          </span>
        </div>
      </Form>
    </div>
  );
};
