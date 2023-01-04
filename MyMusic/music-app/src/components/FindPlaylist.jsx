import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./assets/createSong.module.css";
import { MdOutlineDisabledByDefault } from "react-icons/md";
import { MainContext } from "./contexts/MainProvider";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const FindPlaylist = (props) => {
  const { create, setCreate, playlists, setPlaylists } =
    useContext(MainContext);
  const [pName, setPName] = useState();
  const [putId, setPutId] = useState();
  const baseUrl = "http://localhost:8000";
  const [songId, setSongId] = useState();
  const { id } = useParams("");
  console.log(putId);
  console.log(props.songId)

  useEffect(() => {

  })

  const addToPlaylist = (playlistId) => {
    axios
      .post(baseUrl + "/songs/", {
        name: props.songId.name,
        artistEx: props.songId.artist,
        url: props.songId.preview_url
      })
      .then((res) => {
        // setCreate(false);
        console.log(res.data);
        axios
          .put(baseUrl + "/playlist/" + playlistId, {
            id: res.data._id,
          })
          .then((res) => {

            // window.location.reload(false);
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className={
        props.songId ? styles.container : `${styles.container} ${styles.displayNone}`
      }
    >
      <div className={styles.headSector}>
        <span className={styles.title}>Playlists</span>
        <MdOutlineDisabledByDefault
          onClick={() => setCreate(false)}
          className={styles.disable}
        />
      </div>
      <div className={styles.midSector}>
        <input placeholder="Find Playlist" className={styles.inp} />
        <div className={styles.innerCont}>
          {playlists &&
            playlists.map((playlist, index) => {
              console.log(playlist);
              return (
                <span onClick={() => addToPlaylist(playlist._id,)}>
                  {" "}
                  {playlist.title}
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
};
