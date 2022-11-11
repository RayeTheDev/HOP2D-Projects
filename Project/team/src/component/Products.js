import styles from "./css/products.module.css"
import { Review } from './Review'
import rProfileImg from "../img/Ellipse.svg";
import { useContext } from "react";
import { ThemeContext } from "../App";

export const Products = () => {
    const { theme, changeDarkTheme } = useContext(ThemeContext);
    console.log('products has arrived')
    return (
        <div className={theme.pallate.dark ? `${styles.Container} ${styles.Dark}` : styles.Container}>
            <div className={theme.pallate.dark ? `${styles.middle} ${styles.textWhite}` : styles.middle}>PRODUCTS</div>

        </div>
    )
}