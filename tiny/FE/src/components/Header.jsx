import styles from "./assets/header.module.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import { MainContext } from "./context/MainProvider";
import Dropdown from 'react-bootstrap/Dropdown';

export const Header = () => {
  const Navigate = useNavigate();
  const [dis, setDis] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const { user } = useContext(MainContext);
  const options = [
    'one', 'two', 'three'
  ];
  console.log(user);
  return (
    <div className={styles.Container}>
      <span className={styles.texts}>Хэрхэн ажилладаг вэ?</span>
      {!currentUser && (
        <Button
          variant="success"
          className={styles.button}
          onClick={() => Navigate("/login")}    
        >
          Нэвтрэх
        </Button>
      )}

      {user && 
         <Dropdown>
         <Dropdown.Toggle variant="success" id="dropdown-basic">
           {user && user.email}
         </Dropdown.Toggle>
   
         <Dropdown.Menu>
           <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
           <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
           <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
    
  }
    </div>
  );
};
