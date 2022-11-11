import styles from "./css/services.module.css"
import { useContext } from "react";
import { ThemeContext } from "../App";

export const Services = () => {
    const { theme, changeDarkTheme } = useContext(ThemeContext);
    return (
        <div className={theme.pallate.dark ? `${styles.Container} ${styles.Dark}` : styles.Container}>
            <div className={theme.pallate.dark ? `${styles.middle} ${styles.textWhite}` : styles.middle}>Services</div>

        </div>
    )
}