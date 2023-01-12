import styles from "./assets/header.module.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const Navigate = useNavigate();
  return (
    <div className={styles.Container}>
      <span className={styles.texts}>Хэрхэн ажилладаг вэ?</span>
      <Button
        variant="success"
        className={styles.button}
        onClick={() => Navigate("/login")}>
        Нэвтрэх
      </Button>
    </div>
  );
};
