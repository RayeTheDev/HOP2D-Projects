import styles from "./assets/home.module.css";
import Cover from "./img/covers.jpeg";
import { useState, useEffect, useContext, useRef } from "react";
import { Container, Button } from "react-bootstrap";
import { PlayList } from "./PlayList";
import axios from "axios";
import PlayListImg from "./img/rapcav.jpeg";
import { Link } from "react-router-dom";
import { CreateList } from "./CreateList";
import { ThemeContext } from "../App";

export const Home = () => {
  const [nameI, setNameI] = useState();
  const [emailI, setEmailI] = useState();
  let name = useRef();
  let email = useRef();
  const [data, setData] = useState([]);
  const { create, setCreate } = useContext(ThemeContext);
  const baseUrl = "http://localhost:9000";
  useEffect(() => {
    if (nameI != null && emailI != null) {
      axios
        .post(baseUrl + "/users", { name: nameI, email: emailI })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [nameI, emailI]);

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

  const SetValue = () => {
    setNameI(name.current.value);
    setEmailI(email.current.value);
    console.log(name.current.value);
    console.log(email.current.value);
  };
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
      <div>
        <input ref={name} placeholder="Name" />
        <input ref={email} placeholder="Email" />
        <Button onClick={() => SetValue()}>Post</Button>
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
