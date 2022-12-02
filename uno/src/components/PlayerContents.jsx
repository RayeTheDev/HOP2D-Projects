import styles from './assets/css/playerContent.module.css'

export const PlayerContent = (props) => {
    return(
        <img className={styles.cardsImg}src={props.img} />
    )
}