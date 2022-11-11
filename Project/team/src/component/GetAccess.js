import styles from './css/getaccess.module.css'
import { useContext } from "react";
import { ThemeContext } from "../App";

export const GetAccess = () => {
    const { theme, changeDarkTheme } = useContext(ThemeContext);
    return (
        <div className={theme.pallate.dark ? `${styles.Container} ${styles.Dark}` : styles.Container}>
            <div className={theme.pallate.dark ? `${styles.middle} ${styles.textWhite}` : styles.middle}>Get Access</div>

        </div>
    )
}