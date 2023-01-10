import { Button } from "react-bootstrap";
import styles from "../assets/home.module.css";
import Logo from "../assets/img/logo-default.svg";
export const Home = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.innerContainer}>
        <img src={Logo} className={styles.logo}></img>
        <div className={styles.inpCont}>
          <input className={styles.inp} type="text" placeholder="https://www.web-huudas.mn"></input>
          <Button className={styles.button}> БОГИНОСГОХ</Button>
        </div>
      </div>
      <div className={styles.footerCont}>
        <span>Made with ♥️ by Nest Academy</span>
        <span className={styles.bottomText}>©boginoo.io 2020</span>
      </div>
    </div>
  );
};
