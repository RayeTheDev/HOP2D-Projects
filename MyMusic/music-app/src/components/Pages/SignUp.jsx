import { Button, Container } from "react-bootstrap";
import styles from "../assets/signup.module.css";
import { BsMusicNoteList } from "react-icons/bs";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";


export const SignUp = () => {
  const [nameI, setNameI] = useState();
  const [passwordI, setPasswordI] = useState();
  const [data, setData] = useState()
  const [app, setApp] = useState(false)
  const navigate = useNavigate()
  let name = useRef();
  let password = useRef();
  const baseUrl = "http://localhost:8001";

  useEffect(() => {
    if (nameI != null && passwordI != null) {
      axios
        .post(baseUrl + "/users", { email: nameI, password: passwordI })
        .then((res) => {
        //   console.log(res.data);
          setData(res.data)
        })
        .catch((error) => {
          toast.error("Email or password is incorrect");
        });
    }
  }, [nameI, passwordI]);
  
  const SetValue = () => {
    setNameI(name.current.value);
    setPasswordI(password.current.value);
    console.log(name.current.value);
    console.log(password.current.value);

  };


const onSubmit = async (e) => {
  e.preventDefault()

  await createUserWithEmailAndPassword(auth, nameI, passwordI)
    .then((userCredential) => {
      const user = userCredential.user
      console.log(user)
      navigate('./login')
    })
    .catch((error) => {
      const errorCode = error.errorCodeconst
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
}
  // console.log(app)
  console.log(data)
  return (
    <div className={styles.Container}>
      {" "}
      {/* <Container> */} <ToastContainer />
 
      <Link to="/">
        <div className={styles.logoCont}>
          <BsMusicNoteList className={styles.logo} />
          <span className={styles.logoText}>Invader</span>
        </div>
      </Link>
      <div className={styles.borderContainer}>
        <div className={styles.topCont}>
          <span>Sign Up</span>
        </div>
        <div className={styles.section1}>
          <span className={styles.section1Texts}>Email address</span>
          <input
            placeholder="Your email "
            ref={name}
            className={styles.inp}
          ></input>
        </div>
        <div className={styles.section1}>
          <span className={styles.section1Texts}>Password</span>
          <input
            placeholder="Your password"
            ref={password}
            className={styles.inp}
          ></input>
        </div>

        <div className={styles.section2}>
          <Button
            onClick={() => SetValue()}
            className={styles.but}
            variant="warning"
          >
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
      </div>
      {/* </Container> */}
    </div>
  );
};
