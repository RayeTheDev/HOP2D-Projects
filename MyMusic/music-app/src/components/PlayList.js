import styles from "./assets/playlist.module.css";
import { BiUpvote } from "react-icons/bi"
import { Link } from "react-router-dom";

export const PlayList = (props) => {
  return (
    <div className={styles.Container}>
      <img className={styles.img} src={props.image} />
      <div className={styles.textCont}>hello {props.title}</div>
      <div className={styles.voteCont}>
        <BiUpvote className={styles.icon} />
        <span className={styles.botText}>{props.Vote}</span>
      </div>
    </div>
  );
};
