import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "../assets/home.module.css";
import Logo from "../assets/img/logo-default.svg";

export const Home = () => {
  const [url, setUrl] = useState("");
  const [resUrl, setResUrl] = useState();
  const AddLink = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/links", { full: url })
      .then((res) => {
        console.log(res.data);
        setResUrl(res.data);
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
      <div className={styles.urlContainer}>
        <span className={styles.urlTexts}>Өгөгдсөн холбоос:</span>
        {resUrl && <a href={resUrl.full}>{resUrl.full}</a>}
        <span className={styles.urlTexts} style={{ marginTop: "40px" }}>
          Богино холбоос:
        </span>
        {resUrl && (
          <a href={`http://localhost:9000/${resUrl.short}`}>
            localhost:9000/{resUrl.short}{" "}
          </a>
        )}
      </div>
      <div className={styles.footerCont}>
        <span>Made with ♥️ by Nest Academy</span>
        <span className={styles.bottomText}>©boginoo.io 2020</span>
      </div>
    </div>
  );
};
