import { useContext } from "react";
import styles from "./assets/css/playerContent.module.css";
import { ThemeContext } from "./game";

export const PlayerContent = (props) => {
  const { click, setClick } = useContext(ThemeContext);


  console.log(props.img)
  return (
    <>
      <img
      click={props.img}
        onClick={() => setClick(props.id)}
        className={styles.cardsImg}
        src={props.img}
      />
    </>
  );
};
