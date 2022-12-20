import styles from "../assets/home.module.css";
import Cover from "../img/covers.jpeg";
import { useState, useEffect, useContext, useRef } from "react";
import { Container, Button } from "react-bootstrap";
import { PlayList } from "../PlayList";
import axios from "axios";
import PlayListImg from "../img/rapcav.jpeg";
import { Link } from "react-router-dom";
import { CreateList } from "../CreateList";
import { ThemeContext } from "../../App";

export const Home = () => {

  const [data, setData] = useState([]);
  const { create, setCreate } = useContext(ThemeContext);


  return (
    <div className={styles.Container}>
      <CreateList />
      <div className={styles.topCont}>
        {/* <img className={styles.coverImg} src={Cover}></img>s */}
        <div className={styles.coverTextCont}>
          <span className={styles.coverTitle}>Connect on Invader</span>
          <p className={styles.coverText}>
            Discover, stream, and share a constantly expanding mix of music from
            emerging and major artists around the world.
          </p>
          {/* <Button className={styles.coverButton}>Sign up for free</Button> */}
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.title}>Playlists</div>
        <div className={styles.playlistContainer}>
          {data.map((playlist, index) => {
            return (
              <Link to="/songs">
                <PlayList
                  key={index + playlist}
                  image={playlist.userId.image}
                  title={playlist.name}
                  Vote={playlist.totalVote}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
