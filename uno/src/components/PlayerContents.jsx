import { useContext } from "react";
import styles from "./assets/css/playerContent.module.css";
import { ThemeContext } from "./game";

export const PlayerContent = (props) => {
  const { click, setClick, setSelectedCard, Check } = useContext(ThemeContext);


  // console.log(props.img);
  return (
    <>
      <img
        click={props.img}
        onClick={ () => Check(props.img, props.index, props.id)}
        className={styles.cardsImg}
        src={props.img}
      />
    </>
  );
};
