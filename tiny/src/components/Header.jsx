import styles from './assets/header.module.css'
import {Button} from 'react-bootstrap'
export const Header = () => {
    return(
        <div className={styles.Container}>
            <span className={styles.texts}>Хэрхэн ажилладаг вэ?</span>
            <Button variant='success' className={styles.button}>Нэвтрэх</Button>
        </div>
    )
}