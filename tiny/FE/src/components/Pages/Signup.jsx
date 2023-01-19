import styles from "../assets/login.module.css";
import Logo from "../assets/img/logo-default.svg";
import { Button, Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPass, setConfirmPass] = useState();

  const navigate = useNavigate();
  const baseUrl = "http://localhost:9000";

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email);

    if(password !== confirmPass) {
      toast.error('Passwords do not match')
      return
    }
    axios
      .post(baseUrl + "/users", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((error) => {
        toast.error("Invalid email or password");
        console.log(error.message);
      });
  };

  return (
    <div className={styles.Container}>
      <ToastContainer />
      <img onClick={() => navigate('/')}src={Logo} className={styles.logo}></img>
      <div className={styles.formContainer}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p className={styles.title}>Бүртгүүлэх</p>
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
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inp}
            placeholder="••••••••••"></input>
        </div>
        <div className={`${styles.inCont} ${styles.marginTop}`}>
          <label>Нууц үгээ давтна уу?</label>
          <input onChange={(e) => setConfirmPass(e.target.value)}className={styles.inp} placeholder="••••••••••"></input>
        </div>

        <Button
          variant="success"
          onClick={onSubmit}
          className={`${styles.button} ${styles.marginTop}`}>
          Бүртгүүлэх
        </Button>
      </div>

      <div className={styles.footerCont}>
        <span>Made with ♥️ by Nest Academy</span>
        <span className={styles.bottomText}>©boginoo.io 2020</span>
      </div>
    </div>
  );
};
