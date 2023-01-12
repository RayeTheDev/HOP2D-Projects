import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "../assets/home.module.css";
import Logo from "../assets/img/logo-default.svg";

export const Home = () => {
  const [url, setUrl] = useState("");
  const AddLink = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/links", { url: url })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.Container}>
      <div className={styles.innerContainer}>
        <img src={Logo} className={styles.logo}></img>
        <div className={styles.inpCont}>
          <input
            className={styles.inp}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            placeholder="https://www.web-huudas.mn"></input>
          <Button onClick={AddLink} className={styles.button}>
            {" "}
            БОГИНОСГОХ
          </Button>
        </div>
      </div>
      <div className={styles.footerCont}>
        <span>Made with ♥️ by Nest Academy</span>
        <span className={styles.bottomText}>©boginoo.io 2020</span>
      </div>
    </div>
  );
};
