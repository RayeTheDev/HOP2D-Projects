import styles from './assets/songs.module.css'

export const Songs = (props) => {
    return (
        <div className={styles.Container}>
            <div style={{ backgroundImage: `${props.image}` }} className={styles.topCont}>
                <span>{props.title}</span>
            </div>
        </div >
    )
}