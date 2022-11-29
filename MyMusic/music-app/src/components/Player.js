import styles from "./assets/player.module.css";
import { BsFillVolumeDownFill, BsSpotify } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import Album from "./img/boku.jpg";

import SpotifyPlayer from "react-spotify-web-playback";

export function Player({ accessToken, trackUri, currentTrack }) {
  console.log(currentTrack);
  if (!accessToken) return null;
  return (
    <div className={styles.Container}>
      <div className={styles.albumCont}>
        <img className={styles.albumImg} src={Album} />
        <div className={styles.songDetails}>
          <span className={styles.songText}>Song name</span>
          <span className={styles.artistText}>Artist name</span>
        </div>
      </div>
      <div className={styles.middleCont}>
        <AiFillPlayCircle className={styles.playIcon} />
        <progress value="0" max="100"></progress>
      </div>
      <div className={styles.volume}>
        <BsFillVolumeDownFill className={styles.volIcon} />
        <BsFillVolumeDownFill className={styles.volIcon} />
        <BsFillVolumeDownFill className={styles.volIcon} />
        <input type="range" name="volBar" />
      </div>

      {/* <SpotifyPlayer
                token="BQAw6YCqHbY8xZEkOsGb1h4GzgUzx-GU2uAlCgYBvKsztqej74UmsDQ3E2nXj2CRftJZ6sp7l2sBXSw3xaalOb-G9eMmsBPeYkPvTw16WyFHSw5veEYaKU2rFSf4COxPDl7cF7rBvCAikVsbH4wMQQOP7oUzdhwiPxxhPcn1brTdjm3R7US0NWfuv6gzlE4"
                uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
                /> */}
    </div>
  );
}
