import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { links } from "../Client/Instance";
import styles from "../assets/home.module.css";
import Logo from "../assets/img/logo-default.svg";
import { client } from "../Client/Instance";
import { AuthContext, AuthProvider } from "../context/AuthProvider";

export const Home = () => {
  const {token} = useContext(AuthContext)
  const [url, setUrl] = useState("");
  const [resUrl, setResUrl] = useState();
  const [urls, SetUrls] = useState();
  const [history, setHistory] = useState();

  useEffect(() => {
    client
      .get("/links")
      .then((res) => {
        console.log(res.data);
        setHistory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const AddLink = async (e) => {
    e.preventDefault();

    const result = await client
      .post("/links", { full: url })
      .then((res) => {
        console.log(res.data);
        setResUrl(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
console.log(token)

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
            placeholder="https://www.web-huudas.mn"
          ></input>
          <Button onClick={AddLink} className={styles.button}>
            {" "}
            БОГИНОСГОХ
          </Button>
        </div>
        {resUrl && (
          <div className={styles.urlContainer}>
            <span className={styles.urlTexts}>Өгөгдсөн холбоос:</span>
            <a href={resUrl.full}>{resUrl.full}</a>
            <span className={styles.urlTexts} style={{ marginTop: "40px" }}>
              Богино холбоос:
            </span>
            <a href={`http://localhost:9000/${resUrl.short}`}>
              localhost:9000/{resUrl.short}{" "}
            </a>
          </div>
        )}
      </div>

      <div className={styles.footerCont}>
        <span>Made with ♥️ by Nest Academy</span>
        <span className={styles.bottomText}>©boginoo.io 2020</span>
      </div>

     

      <div className={styles.historyContainer}>
      <span className={styles.hTitle}>Түүх</span>
        {history &&
          history.map((item) => {
            // console.log(item.full.slice(0, 10))
            return (
              item.full &&
              item.short && (
                <>
                  <div className={styles.hInnerContainer}>
                    <div className={styles.hUrlContainer}>
                      <span>Өгөгдсөн холбоос:</span>
                      <a href={item.full}>
                        {item.full.length >= 25 && item.full.slice(0, 26)}...
                        {item.full.length <= 24 && item.full}
                      </a>
                    </div>
                    <div className={styles.hUrlContainer}>
                      <span>Богино холбоос:</span>
                      <a href={`http://localhost:9000/${item.short}`}>
                        localhost:9000/{item.short}{" "}
                      </a>
                    </div>
                  </div>
                  <hr></hr>
                </>
              )
            );
          })}
      </div>
    </div>
  );
};
