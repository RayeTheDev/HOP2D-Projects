import styles from "./css/team.module.css";
import { BsArrowRight } from "react-icons/bs";
import meetings from "../img/meetings.svg";
import miniCard from "../img/miniCard.svg";
import teamhub from "../img/teamhub.png"
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button';

export const Team = (props) => {
  return (
    <>
      <div className={styles.Container}>
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
          <div className={styles.input}>
            <input type="text" placeholder="Email" />
            <button>Get Early Access</button>
          </div>
        </div>
      </div>

      <div className={styles.ContainerSecond}>
        <div className={styles.inner2Container}>
          <div className={styles.titleSecond}>
            Your Hub for <br /> teamwork
          </div>
          <div className={styles.textSecond}>
            Give everyone you work with—inside and outside your <br />
            company—a more productive way to stay in sync.
            <br /> Respond faster with emoji, keep conversations focused <br />{" "}
            in channels, and simplify all your communication into <br />
            one place.
          </div>
          <div className={styles.bottomCont}>
            <span className={styles.bottomSecond}>Learn More</span>
            <BsArrowRight className={styles.arrow} />
          </div>
        </div>
        <div className={styles.imgCont}>
          <img src={miniCard} className={styles.miniCardImg} />
          <img src={meetings} className={styles.teamhubImg} />
          {/* <img src={teamhub}/> */}
        </div>
      </div>
    </>
  );
};
