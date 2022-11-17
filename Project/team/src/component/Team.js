import styles from "./css/team.module.css";
import { BsArrowRight } from "react-icons/bs";
import meetings from "../img/meetings.svg";
import miniCard from "../img/miniCard.svg";
import mask from "../img/mask.svg";
import mask2 from "../img/mask2.svg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "./card.json";
import { Review } from "./Review";
import rProfileImg from "../img/Ellipse.svg";
import nHeadImg from "../img/Head.svg";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../App";
import Logo from "../img/logo.svg";
import { BsInstagram } from "react-icons/bs";
import { useState } from "react";
import axios from 'axios'
const img = [rProfileImg, nHeadImg];

export const Team = (props) => {
  const { theme, changeDarkTheme } = useContext(ThemeContext);
  const [pos, setPos] = useState(0);
  const baseUrl =  'https://dummyapi.io/data/v1/';
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get(baseUrl + 'comment', {
      headers: {
        "app-id": " 636f2fc4e8d0ff392b3fc559",
      }
    })
    .then((res) => {
       setData(res.data.data)
       console.log(res.data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])



  const goRight = (index) => {
    console.log(pos);
    console.log(data.length)
    if (pos <= data.length  + 26) {
      setPos((prev) => prev + 3);
    }
  };
  const goLeft = () => {
    if(pos >= 0) {
       setPos((prev) => prev - 3);
    }
   
  };

  return (
    <>
      <div className={styles.Container}>
        <Container>
          <div className={styles.innerContainer}>
            <span className={styles.title}>
              Instant collaborations
              <br />
              for remote teams  
            </span>
            <span className={styles.texts}>
              All in one for your remote team chats,
              <br />
              collaboration and track projects
            </span>
            <br />
            <div className={styles.inputCont}>
              <input type="text" placeholder="Email" />
              <Button className={styles.button} variant="info">
                Get Early Access
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <div
        className={
          theme.pallate.dark
            ? `${styles.ContainerSecond} ${styles.dark}`
            : styles.ContainerSecond
        }
      >
        <div className={styles.inner2Container}>
          <div
            className={
              theme.pallate.dark
                ? `${styles.titleSecond} ${styles.textWhite}`
                : `${styles.titleSecond} ${styles.textDefault}`
            }
          >
            Your Hub for teamwork
          </div>
          <div
            className={
              theme.pallate.dark
                ? `${styles.textSecond} ${styles.textWhite}`
                : `${styles.textSecond} ${styles.textDefault}`
            }
          >
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
          <div className={styles.bottomCont}>
            <span className={styles.bottomSecond}>Learn More</span>
            <BsArrowRight className={styles.arrow} />
          </div>
        </div>

        <div className={styles.imgCont}>
          <img src={miniCard} className={styles.miniCardImg} />
          <img src={meetings} className={styles.teamhubImg} />
        </div>
      </div>

      <div
        className={
          theme.pallate.dark
            ? `${styles.ContainerSecond} ${styles.dark}`
            : styles.ContainerSecond
        }
      >
        <div className={styles.imgCont2}>
          <img src={mask} className={styles.maskImg} />
        </div>
        <div className={styles.inner3Container}>
          <div
            className={
              theme.pallate.dark
                ? `${styles.titleSecond} ${styles.textWhite}`
                : `${styles.titleSecond} ${styles.textDefault}`
            }
          >
            Simple task management
          </div>
          <div 
            className={
              theme.pallate.dark
                ? `${styles.textSecond} ${styles.textWhite}`
                : `${styles.textSecond} ${styles.textDefault}`
            }
          >
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
          <div className={styles.bottomCont}>
            <span className={styles.bottomSecond}>Learn More</span>
            <BsArrowRight className={styles.arrow} />
          </div>
        </div>
      </div>

      <div
        className={
          theme.pallate.dark
            ? `${styles.ContainerSecond} ${styles.dark}`
            : styles.ContainerSecond
        }
      >
        <div className={styles.inner3Container}>
          <div
            className={
              theme.pallate.dark
                ? `${styles.titleSecond} ${styles.textWhite}`
                : `${styles.titleSecond} ${styles.textDefault}`
            }
          >
            Scheduling that actually works
          </div>
          <div
            className={
              theme.pallate.dark
                ? `${styles.textSecond} ${styles.textWhite}`
                : `${styles.textSecond} ${styles.textDefault}`
            }
          >
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
          <div className={styles.bottomCont}>
            <span className={styles.bottomSecond}>Learn More</span>
            <BsArrowRight className={styles.arrow} />
          </div>
        </div>
        <div className={styles.imgCont}>
          <img src={mask2} className={styles.maskImg} />
        </div>
      </div>

      <div
        className={
          theme.pallate.dark
            ? `${styles.ContainerBottom} ${styles.dark}`
            : styles.ContainerBottom
        }
      >
        
        <div className={styles.titleCont}>
          <span
            className={
              theme.pallate.dark
                ? `${styles.titleSecond} ${styles.textWhite}`
                : `${styles.titleSecond} ${styles.textDefault}`
            }
          >
            What people say about us
          </span>
        </div>
        <div className={styles.cardCont}>
          <div
            style={{
              transform: `translateX(${-10 * pos}%)`,
              transition: "300ms",
            }}
            className={styles.cards}
          >
            {data && data.map((item, index) => {
              return (
                <Review {...item}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.buttonCont}>
           <Button onClick={goLeft}>Left</Button>
        <Button onClick={goRight}>Right</Button>
        </div>
       

      </div>
    </>
  );
};
