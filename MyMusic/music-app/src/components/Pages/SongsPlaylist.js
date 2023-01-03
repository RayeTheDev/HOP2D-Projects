import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AiFillDelete } from "react-icons/ai";
import styles from "../assets/songs.module.css";
import { Player } from "../Player";
import { MainContext } from "../contexts/MainProvider";
import { useAuth } from "../contexts/AuthContext";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { Dropdown, Spinner } from 'react-bootstrap'
import { CreateSong } from "../CreateSong";

export const SongsPlaylist = () => {
  const { accessToken, playlistName, create, setCreate, setPlaylistName } = useContext(MainContext);
  const { currentUser } = useAuth()
  const [songs, setSongs] = useState();
  const [selectedSong, setSelectedSong] = useState(null);
  const [dur, setDur] = useState();
  const [p, setP] = useState(false);
  const [song_data, setSong_data] = useState();
  const [length, setLength] = useState();
  const [randomColors, setRandomColors] = useState(["red", "blue", "green"])
  const [isPlaying, setIsPlaying] = useState(false);
  const [index, setIndex] = useState();
  const { id } = useParams("");
  const Navigate = useNavigate();

  useEffect(() => {
    const data = window.localStorage.getItem('APP_PLAYLIST');
    console.log(data)
    if (data !== null) setPlaylistName(JSON.parse(data));
    axios
      .get(`http://localhost:8000/playlist/${id}`, {})
      .then((res) => {
        // console.log(res.data.songs);
        setSongs(res.data.songs);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  // console.log(id);
  const Delete = () => {
    axios
      .delete(`http://localhost:8000/playlist/${id}`, {})
      .then((res) => {
        console.log("deleted");
        Navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const audioElem = useRef();

  useEffect(() => {
    if (selectedSong != null) {
      if (isPlaying) {
        audioElem.current.play();
      } else {
        audioElem.current.pause();
      }
    }
  }, [isPlaying, selectedSong]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    // console.log(duration, ct)
    setDur((ct / duration) * 100);
    setLength(duration);
  };
  const ms = 54000000;

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }
  function convertMsToTime(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    seconds = seconds % 60;
    minutes = minutes % 60;
    return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
  }

  console.log(songs);
  console.log(playlistName);
  return (
    <>
      <CreateSong />
      <div className={styles.Container}>

        <div className={styles.topCont}>
          <div style={{ display: 'flex' }}>
            <img className={styles.pImg} src="https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2022/03/spotify-playlist-cover-orange-headphones-032322.jpg"></img>
            <div className={styles.infoCont}>
              <span className={styles.playlistTexts}>Playlist</span>
              <span className={styles.playlistTitle}>{playlistName}</span>
              <span className={styles.playlistTexts}>Description</span>
              <div>
                <span className={styles.playlistTexts}>{!currentUser && <Spinner />}{currentUser && currentUser.email}, 1 Songs</span>

              </div>
            </div>
          </div>

          <Dropdown className={styles.dropdown}>
            <Dropdown.Toggle id="dropdown-basic">
              <BsThreeDots className={styles.threeDot} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setCreate(true)}>Add Songs</Dropdown.Item>
              <Dropdown.Item onClick={Delete} href="#/action-2">Delete</Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
        </div>


        {/* <AiFillDelete onClick={Delete} className={styles.delete} /> */}
        {/* <hr className={styles.line}></hr> */}
        <div className={styles.mainCont}>
          {songs &&
            songs.map((song, index) => {
              console.log(song)
              return (
                <div
                  className={styles.songContainer}
                  onClick={() => {
                    setIndex(index);
                    setP(true);
                    setSong_data(song);
                    setSelectedSong(song.preview_url);
                    setIsPlaying(true);
                  }}
                >
                  {/* <img src={song.image} /> */}
                  <span className={styles.id}>{index + 1}</span>
                  <div className={styles.song}>
                    <span className={styles.songName}>{song.name}</span>
                    <span className={styles.artist}>{song.artist}</span>
                  </div>
                  <span className={styles.duration}>
                    {convertMsToTime(song.duration_ms)}
                  </span>
                  <Player />
                </div>
              );
            })}
        </div>


        {/* <>
        <audio src={selectedSong} ref={audioElem} onTimeUpdate={onPlaying} />
        <Player
          songs={songs}
          setSongs={setSongs}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioElem={audioElem}
          selectedSong={selectedSong}
          setSelectedSong={setSelectedSong}
          index={index}
          setIndex={setIndex}
          dur={dur}
          p={p}
          setSongData={setSong_data}
          songData={song_data}
          length={Math.trunc(length)}
        />
      </> */}
      </div>
    </>

  );
};
