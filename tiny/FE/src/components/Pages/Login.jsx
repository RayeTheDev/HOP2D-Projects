import styles from "../assets/login.module.css";
import Logo from "../assets/img/logo-default.svg";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const Navigate = useNavigate();
  const baseUrl = "http://localhost:9000";
  const { currentUser, setCurrentUser, setToken } = useContext(AuthContext);

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
        setToken(res.data.accessToken);
        window.localStorage.setItem("token", res.data.accessToken);
        Navigate("/");
      })
      .catch((error) => {
        toast.error("Invalid email or password");
        console.log(error.message);
      });
  };

  return (
    <div className={styles.Container}>
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
        <Button onClick={onSubmit} variant="success" className={styles.button}>
          Нэвтрэх
        </Button>
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
    </div>
  );
};
