import styles from "./assets/playlist.module.css";
import { BiUpvote } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

export const PlayList = (props) => {
  const baseUrl = "http://localhost:8000";
  const Delete = () => {
    axios
      .delete(baseUrl + "/playlists")
      .then((res) => {

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.Container}>
      <img className={styles.img} src={props.image} />
      <div className={styles.textCont}> {props.title}</div>
      <div className={styles.voteCont}>
        <BiUpvote className={styles.icon} />
        <span className={styles.botText}>{props.Vote}</span>
      </div>
      <div className={styles.deleteCont}>
        <AiFillDelete className={styles.delete} />
      </div>
    </div>
  );
};
