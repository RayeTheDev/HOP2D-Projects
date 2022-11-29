import styles from './assets/player.module.css'
import { BsFillVolumeDownFill } from "react-icons/bs"
import { AiFillPlayCircle } from "react-icons/ai"
import Album from './img/boku.jpg'


export function Player({ accessToken, trackUri, currentTrack }) {
    console.log(currentTrack)
    if (!accessToken) return null
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
                <progress value="50" max="100"></progress>
            </div>
            <div className={styles.volume}>
                <BsFillVolumeDownFill className={styles.volIcon} />
                <BsFillVolumeDownFill className={styles.volIcon} />
                <BsFillVolumeDownFill className={styles.volIcon} />
                <input
                    type="range"
                    name="volBar"
                />
            </div>
        </div>
    )
}