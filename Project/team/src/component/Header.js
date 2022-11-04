import styles from "./css/header.module.css"
import { Link } from "react-router-dom"
import { useState } from "react"
export const Header = (props) => {
    const [css, setCss] = useState(false)
    return (
        <div className={styles.hContainer}>
            <Link to="/" onClick={() => setCss(false)}>
                <img className={styles.img} src={css ? props.image2 : props.image} />
            </Link>

            {/* <Link to="/"></Link> */}

            <div className={styles.textsContainer}>

                <Link onClick={() => setCss(true)} to="./products" className={css ? styles.change : styles.texts}>Products</Link>
                <Link onClick={() => setCss(true)} to="/services" className={css ? styles.change : styles.texts}>Services</Link>
                <Link onClick={() => setCss(true)} className={css ? styles.change : styles.texts}>Contact</Link>
                <Link onClick={() => setCss(true)} className={css ? styles.change : styles.texts}>Log In</Link>

                <button className={css ? styles.changeButton : styles.getButton}>
                    <span >Get Access</span>
                </button>
            </div>
        </div>
    )
}       