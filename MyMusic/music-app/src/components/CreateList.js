import { useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../App";
import styles from "./assets/createlist.module.css";

export const CreateList = () => {
  const { create, setCreate } = useContext(ThemeContext);
  console.log(create);
  return (
    <div
      className={
        create ? styles.container : `${styles.container} ${styles.displayNone}`
      }
    >
      <div className={styles.headSector}>
        <span className={styles.title}>Create Playlist</span>
        <span>Exit</span>
      </div>
      <div className={styles.midSector}>
        <button variant="light" className={styles.imgInp}></button>
        <div className={styles.infoSector}>
          <div>
            <span className={styles.infoText}>Name:</span>
            <input placeholder="My Playlist #1" className={styles.inp}></input>
          </div>
          <div>
            <span className={styles.infoText}>Description:</span>
            <input placeholder="Add an optional description"  className={styles.inpD}></input>
          </div>
          <Button className={styles.saveButton}variant="light" >Create</Button>
        </div>

      </div>
      <div className={styles.botSector}>
        <span className={styles.botText}>
        By proceeding, you agree to give Invader access to the image you choose to upload. Please make sure you have the right to upload the image.
        </span>
      
      </div>
    </div>
  );
};
