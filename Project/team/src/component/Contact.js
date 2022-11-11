import styles from './css/contact.module.css'
import { useContext } from "react";
import { ThemeContext } from "../App";

export const Contact = () => {
    const { theme, changeDarkTheme } = useContext(ThemeContext);
    return (
        <div className={theme.pallate.dark ? `${styles.Container} ${styles.Dark}` : styles.Container}>
            <div className={theme.pallate.dark ? `${styles.middle} ${styles.textWhite}` : styles.middle}>Contact</div>

        </div>
    )
}