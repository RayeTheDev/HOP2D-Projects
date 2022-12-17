import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ThemeContext } from "../App";
import styles from "./assets/songs.module.css";

export const Songs = (props) => {
  const { accessToken } = useContext(ThemeContext);
  const [songs, setSongs] = useState([]);

  const { id } = useParams("");

  useEffect(() => {
    generateSongs();
    console.log(accessToken);
  }, []);

  async function generateSongs() {
    var searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    fetch(
      "https://api.spotify.com/v1/albums/" + `${id}` + "/tracks" + "?market=us",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("song: ", data.items);
        setSongs(data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className={styles.Container}>
      {songs.map((song, index) => {
        return (
          <div className={styles.songContainer}>
            <span>{song.name}</span>
          </div>
        );
      })}
    </div>
  );
};
