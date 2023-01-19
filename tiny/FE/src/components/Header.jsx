import styles from "./assets/header.module.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import { MainContext } from "./context/MainProvider";
import Dropdown from "react-bootstrap/Dropdown";

export const Header = () => {
  const Navigate = useNavigate();
  const [dis, setDis] = useState(false);
  const { currentUser, setCurrentUser, user, setUser } = useContext(AuthContext);
  const { setIsHistory } = useContext(MainContext);

  const LogOut = () => {
    localStorage.clear();
    setUser(null);
    setCurrentUser(null);
  };

  return (
    <div className={styles.Container}>
      <span className={styles.texts}>Хэрхэн ажилладаг вэ?</span>
      <span onClick={() => setIsHistory(true)} className={styles.texts}>
        Түүх
      </span>
      {!user&& (
        <Button
          variant="success"
          className={styles.button}
          onClick={() => Navigate("/login")}>
          Нэвтрэх
        </Button>
      )}

      {user && (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {user && user.email}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => LogOut()}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </div>
  );
};
