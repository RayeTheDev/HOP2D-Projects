import styles from "./assets/home.module.css";
import Cover from "./img/covers.jpeg";
import { useState, useEffect, useContext } from "react";
import { Container, Button } from "react-bootstrap";
import { PlayList } from "./PlayList";
import axios from "axios";
import PlayListImg from "./img/rapcav.jpeg";
import { Link } from "react-router-dom";
import { CreateList } from "./CreateList";
import { ThemeContext } from "../App";

export const Home = () => {
  const [data, setData] = useState([]);
  const { create, setCreate } = useContext(ThemeContext);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/users/3/playlists`
      );
      console.log(response.data);
      setData(response.data);
    })();
  }, []);

  // const options = {
  //   method: 'GET',
  //   url: 'https://spotify-scraper.p.rapidapi.com/v1/track/download/soundcloud',
  //   params: { track: 'Photograph Ed Sheeran' },
  //   headers: {
  //     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
  //     'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
  //   }
  // };

  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

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
                  title={playlist.listName}
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
