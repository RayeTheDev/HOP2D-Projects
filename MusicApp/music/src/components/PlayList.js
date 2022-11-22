import styles from "./assets/playlist.module.css";

export const PlayList = (props) => {
  return (
    <div className={styles.Container}>
      <img className={styles.img} src={props.image} />
      <div className={styles.textCont}>hello {props.title}</div>
    </div>
  );
};
