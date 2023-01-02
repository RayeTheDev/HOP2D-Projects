import styles from "../assets/home.module.css";
import Cover from "../img/covers.jpeg";
import { useState, useEffect, useContext, useRef } from "react";
import { Container, Button, Spinner } from "react-bootstrap";
import { PlayList } from "../PlayList";
import axios from "axios";
import PlayListImg from "../img/rapcav.jpeg";
import { Link, useParams } from "react-router-dom";
import { CreateList } from "../CreateList";
import { MainContext } from "../contexts/MainProvider";
import { useAuth } from "../contexts/AuthContext";

export const Home = () => {
  const [data, setData] = useState([]);
  const { create, setCreate, playlists, playlistSong, setPlaylistSong, setPlaylistName } =
    useContext(MainContext);
  const { currentUser } = useAuth();



  console.log(playlists);
  return (
    <>
      <div
        className={
          create ? `${styles.Container} ${styles.blur}` : styles.Container
        }
      >
        <div className={styles.topCont}>
          {/* 
          <div className={styles.coverTextCont}>
            <span className={styles.coverTitle}> Connect on Invader</span>
            <p className={styles.coverText}>d
              Discover, stream, and share a constantly expanding mix of music
              from emerging and major artists around the world.
            </p>

          </div> */}
          <img className={styles.coverImg} src="https://digwallpapers.com/wallpapers/full/3/b/e/15985-3840x2160-music-background-photo-desktop-4k.jpg"></img>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.title}>Playlists</div>
          <div className={styles.playlistContainer}>
            {!playlists && <Spinner />}
            {playlists &&
              playlists.map((playlist, index) => {
                return (
                  <Link to={`/playlist/${playlist._id}`} onClick={() => {
                    console.log(playlist.title)
                    setPlaylistSong(true)
                    setPlaylistName(playlist.title)
                  }}>
                    <PlayList
                      key={index + playlist}
                      // image={playlist.userId.image}
                      title={playlist.title}
                    />
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
      <CreateList />
    </>
  );
};
