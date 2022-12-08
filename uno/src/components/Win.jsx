import styles from './assets/css/win.module.css'
import { Button } from "react-bootstrap";

export const Win = (props) => {
    return(
        <div className={props.won ? `${styles.Container} ${styles.dFlex}` : styles.Container}>
            <div className={styles.titleCont}>
                <span className={styles.title}>Player {props.winner} Won</span>
                <span className={styles.text}> You are the only one winner among the players</span>
            </div>

            <div className={styles.buttonCont}>
                <Button >Menu</Button>
                <Button onClick={() => {window.location.reload(false)}}>Try Again</Button>
            </div>
        </div>
    )
}