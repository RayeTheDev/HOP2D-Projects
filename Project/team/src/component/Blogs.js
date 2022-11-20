import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";
import styles from "./css/blogs.module.css";
import { News } from "./News";
import rProfileImg from "../img/Ellipse.svg";
import nHeadImg from "../img/Head.svg";
import Data from "./news.json";
import headImg from "../img/Head.svg";
import Container from "react-bootstrap/Container";
import profileImg from "../img/Ellipse.svg";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/esm/Button";

export const Blogs = () => {


  useEffect(() => {
    window.scrollTo(0, 0)

  }, [])
  const img = [headImg, profileImg];
  const { theme, changeDarkTheme, bdata, first, nextPage, prevPage, css, setCss } = useContext(ThemeContext);
  function Fix() {
    if (window.scrollY <= 0) {
      setCss(true)
    } else {
      setCss(false)
    }
  }

  window.addEventListener("scroll", Fix);
  return (
    <div
      className={theme.pallate.dark ? styles.ContainerDark : styles.Container}
    >
      <Container>
        <div>
          <div className={styles.titleCont}>
            <span
              className={
                theme.pallate.dark
                  ? `${styles.title} ${styles.textWhite}`
                  : `${styles.title} ${styles.titleDefault}`
              }
            >
              {" "}
              Blog Posts
            </span>
            <span
              className={
                theme.pallate.dark
                  ? `${styles.text} ${styles.textWhite}`
                  : `${styles.text} ${styles.textDefault}`
              }
            >
              Our latest updates and blogs about managing your team
            </span>
          </div>

          <div className={styles.blogsCont}>
            <div className={styles.blogsInnerCont}>
              {!bdata && (
                <div className={styles.loader}>
                  <Spinner animation="border" role="status"></Spinner>
                  <span>Loading...</span>
                </div>
              )}
              {bdata && bdata.map((item, index) => <News {...item} />)}
            </div>
          </div>
          <div className={styles.buttonCont}>
            <span>{window.innerWidth}</span>
            <span>{window.innerHeight}</span>
            <Button className={first ? styles.grayButton : ""} onClick={prevPage}>Prev</Button>
            <Button onClick={nextPage}>Next</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
