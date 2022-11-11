import styles from "./css/team.module.css";
import { BsArrowRight } from "react-icons/bs";
import meetings from "../img/meetings.svg";
import miniCard from "../img/miniCard.svg";
import mask from "../img/mask.svg";
import mask2 from "../img/mask2.svg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "./card.json";
import { Review } from "./Review";
import rProfileImg from "../img/Ellipse.svg";
import nHeadImg from "../img/Head.svg";
import { useContext } from "react";
import { ThemeContext } from "../App";

const img = [rProfileImg, nHeadImg];

// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button';

export const Team = (props) => {
  const { theme, changeDarkTheme } = useContext(ThemeContext);
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
          {Card.map((data, index) => {
            return (
              <Review
                key={data + index}
                text={data.text}
                image={img[data.image]}
                name={data.name}
                star={data.star}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
