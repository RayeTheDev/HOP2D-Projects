import styles from "./assets/home.module.css";
import Cover from "./img/covers.jpeg";
import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { PlayList } from "./PlayList";
import axios from "axios";
import PlayListImg from "./img/rapcav.jpeg";
export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/users/3/playlists`
      );
      console.log(response.data);
      setData(response.data);
    })();
  }, []);

  return (
    <div className={styles.Container}>
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
            return <PlayList image={PlayListImg} title={playlist.listName} />;
          })}
        </div>
      </div>
    </div>
  );
};
