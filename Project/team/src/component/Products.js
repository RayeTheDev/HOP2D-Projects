import styles from "./css/products.module.css"
import { Review } from './Review'
import rProfileImg from "../img/Ellipse.svg";


export const Products = () => {
    console.log('products has arrived')
    return (
        <div className={styles.Container}>
            <div className={styles.middle}>PRODUCTS</div>

        </div>
    )
}