import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./assets/createSong.module.css";
import { MdOutlineDisabledByDefault } from "react-icons/md";
import { MainContext } from "./contexts/MainProvider";
import { useParams } from "react-router";

export const CreateSong = () => {
  const { create, setCreate, playlists, setPlaylists } =
    useContext(MainContext);
  let songName = useRef();
  const [pName, setPName] = useState();
  const baseUrl = "http://localhost:8000";
  const [songId, setSongId] = useState();
  const { id } = useParams("");
  const createSong = () => {
    const name = songName.current.value;
    if (name)
      axios
        .post(baseUrl + "/songs", {
          name: name,
        })
        .then((res) => {
          songName.current.value = ""
          setCreate(false);
          console.log(res.data);
          axios
            .put(baseUrl + "/playlist/" + id, {
              id: res.data._id,
            })
            .then((res) => {
              setCreate(false);
              window.location.reload(false);
              console.log(res.data);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });

    // axios
    //     .put(`http://localhost:8000/playlist/${id}`, { id: })
    //     .then((res) => {
    //         // console.log(res.data.songs);
    //         setSongs(res.data.songs);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
  };
  return (
    <div
      className={
        create ? styles.container : `${styles.container} ${styles.displayNone}`
      }
    >
      <div className={styles.headSector}>
        <span className={styles.title}>Add Song</span>
        <MdOutlineDisabledByDefault
          onClick={() => setCreate(false)}
          className={styles.disable}
        />
      </div>
      <div className={styles.midSector}>
        <div className={styles.infoSector}>
          <div className={styles.nameCont}>
            <label className={styles.infoText}>Name:</label>
            <input
              ref={songName}
              placeholder="Song Name"
              className={styles.inp}
            ></input>
          </div>

          <Button
            onClick={createSong}
            className={styles.saveButton}
            variant="light"
          >
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
