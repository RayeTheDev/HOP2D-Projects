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
  const baseUrl = "https://dummyapi.io/data/v1/";
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(9);

  const nextPage = () => {
    setData(null);
    setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setData(null);
    setPage((prev) => {
      if (prev > 0) return prev - 1;
    });
  };

  useEffect(() => {
    axios
      .get(baseUrl + `post?limit=${limit}&page=${page}`, {
        headers: {
          "app-id": " 636f2fc4e8d0ff392b3fc559",
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, limit]);

  const img = [headImg, profileImg];
  const { theme, changeDarkTheme } = useContext(ThemeContext);

  return (
    <div
      className={theme.pallate.dark ? styles.ContainerDark : styles.Container}
    >
      <Container>
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
            {!data && (
              <div className={styles.loader}>
                <Spinner animation="border" role="status"></Spinner>
                <span>Loading...</span>
              </div>
            )}
            {data && data.map((item, index) => <News {...item} />)}
          </div>
        </div>
        <div className={styles.buttonCont}>
          <Button onClick={prevPage}>Prev</Button>
          <Button onClick={nextPage}>Next</Button>
        </div>
      </Container>
    </div>
  );
};
