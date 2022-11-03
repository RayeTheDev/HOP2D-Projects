import styles from "./css/header.module.css"
import {Link} from "react-router-dom"
export const Header = (props) => {
    return (
        <div className={styles.hContainer}>
            <img className={styles.img}src={props.image}></img>
            <div className={styles.textsContainer}>
                <Link to="./products" className={styles.texts}>Products</Link>
                <Link className={styles.texts}>Services</Link>
                <Link className={styles.texts}>Contact</Link>
                <Link className={styles.texts}>Log In</Link>
                <Link>
                <Button>
                </Link>
            </div>
        </div>
    )
}       