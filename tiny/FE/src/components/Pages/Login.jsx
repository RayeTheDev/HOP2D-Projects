import styles from "../assets/login.module.css";
import Logo from "../assets/img/logo-default.svg";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import ScaleLoader from "react-spinners/ScaleLoader";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth, provider } from "../context/fbConfig";
import FacebookProvider from "next-auth/providers/facebook";


export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [fb, setFb] = useState()

  const Navigate = useNavigate();
  const baseUrl = "https://boginoo-bjhp.onrender.com";
  const { currentUser, setCurrentUser, setToken } = useContext(AuthContext);

  const loginWithFB = () => {
    providers: [
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
      })
    ]
  }
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email);

    axios
      .post(baseUrl + "/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          Navigate("/");
          setToken(res.data.accessToken);
          window.localStorage.setItem("token", res.data.accessToken);
        }, 2000);
      })
      .catch((error) => {
        toast.error("Invalid email or password");
        console.log(error.message);
      });
  };

  return (
    <div className={styles.Container}>
      {loading ? (
        <div className={styles.loadingCont}>
          <div className={styles.lInnerCont}>
            <ScaleLoader color="#02b589" height={40} />
            <span>Successfully connnected</span>
          </div>
        </div>
      ) : (
        <>
          <ToastContainer />
          <img
            onClick={() => Navigate("/")}
            src={Logo}
            className={styles.logo}></img>
          <div className={styles.formContainer}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p className={styles.title}>Нэвтрэх</p>
            </div>

            <div className={styles.inCont}>
              <label>Цахим хаяг</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inp}
                placeholder="name@mail.domain"></input>
            </div>
            <div className={`${styles.inCont} ${styles.marginTop}`}>
              <label>Нууц үг</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className={styles.inp}
                placeholder="••••••••••"></input>
            </div>
            <div className={styles.checkCont}>
              <input className={styles.checkBox} type="checkbox"></input>
              <span className={styles.text}>Намайг сана</span>
            </div>
            <Button
              onClick={onSubmit}
              variant="success"
              className={styles.button}>
              Нэвтрэх
            </Button>
            <Button onClick={loginWithFB}>Facebook</Button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "15px",
              }}>
              <span
                onClick={() => Navigate("/signup")}
                className={`${styles.text} ${styles.underline}`}>
                Шинэ хэрэглэгч бол энд дарна уу?
              </span>
            </div>
          </div>

          <div className={styles.footerCont}>
            <span>Made with ♥️ by Nest Academy</span>
            <span className={styles.bottomText}>©boginoo.io 2020</span>
          </div>
        </>
      )}
    </div>
  );
};
