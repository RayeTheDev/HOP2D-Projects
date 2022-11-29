import { useContext } from 'react'
import { ThemeContext } from '../App'
import styles from './assets/createlist.module.css'

export const CreateList = () => {
    const { create, setCreate } = useContext(ThemeContext)
    console.log(create)
    return (
        <div className={create ? styles.container : `${styles.container} ${styles.displayNone}`}>
            <span>HELLOW</span>
        </div>
    )
}