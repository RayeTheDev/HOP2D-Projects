import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../App";
import styles from "./assets/createlist.module.css";

export const CreateList = () => {
  const { create, setCreate, playlists, setPlaylists } =
    useContext(ThemeContext);
  let playlistName = useRef();
  const [pName, setPName] = useState();

  // console.log(create);
  const baseUrl = "http://localhost:8000";

  const createPlaylist = () => {
    const title = playlistName.current.value;
    if (title)
      axios
        .post(baseUrl + "/playlists", { title })
        .then((res) => {
          setPlaylists([...playlists, res.data]);
          // console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
  };
  return (
    <div
      className={
        create ? styles.container : `${styles.container} ${styles.displayNone}`
      }
    >
      <div className={styles.headSector}>
        <span className={styles.title}>Create Playlist</span>
        <span>Exit</span>
      </div>
      <div className={styles.midSector}>
        <button variant="light" className={styles.imgInp}></button>
        <div className={styles.infoSector}>
          <div>
            <span className={styles.infoText}>Name:</span>
            <input
              ref={playlistName}
              placeholder="My Playlist #1"
              className={styles.inp}
            ></input>
          </div>
          <div>
            <span className={styles.infoText}>Description:</span>
            <input
              placeholder="Add an optional description"
              className={styles.inpD}
            ></input>
          </div>
          <Button onClick={createPlaylist} variant="light">
            Create
          </Button>
        </div>
      </div>
      <div className={styles.botSector}>
        <span className={styles.botText}>
          By proceeding, you agree to give Invader access to the image you
          choose to upload. Please make sure you have the right to upload the
          image.
        </span>
      </div>
    </div>
  );
};
