import styles from "./css/header.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { ThemeContext } from "../App.js";

export const Header = (props) => {
  let elem = document.getElementById("header");
  let rect = useRef(null);

  const { theme, changeDarkTheme } = useContext(ThemeContext);
  const [css, setCss] = useState(false);
  let location = useLocation();
  const [bg, setBg] = useState(false);


  // const handleScroll = () => {
  //   setPos(rect.current.getBoundingClientRect().y)
  //   console.log(pos);
  //   if (!rect.current) return;
  //   if (rect.current.getBoundingClientRect().y === -10) {
  //     setBg(false);
  //   } else {
      
  //     setBg(true);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", () => handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      setCss(true);
    } else {
      setCss(false);
    }
  }, [location]);

  function setFix() {
    console.log(window.scrollY)
    if(window.scrollY <= 338) {
      setBg(false);
    } else {
      setBg(true);
    }
  }
  window.addEventListener("scroll", setFix)
  return (
    <div  className={bg ? styles.hContainerBg : styles.hContainer}>
      <Link to="/">
        <img className={styles.img} src={css ? props.image2 : props.image} />
      </Link>

      <div className={styles.textsContainer}>
        <Form className={styles.Form}>
          <Form.Check
            type="switch"
            id="custom-switch"
            onClick={changeDarkTheme}
          />
        </Form>
        <Link to="/blogs" className={css ? styles.change : styles.texts}>
          Blogs
        </Link>
        <Link to="/products" className={css ? styles.change : styles.texts}>
          Products
        </Link>
        <Link to="/services" className={css ? styles.change : styles.texts}>
          Services
        </Link>
        <Link to="/contact" className={css ? styles.change : styles.texts}>
          Contact
        </Link>
        <Link to="/login" className={css ? styles.change : styles.texts}>
          Log In
        </Link>
        <Link to="/getaccess">
          <button className={css ? styles.changeButton : styles.getButton}>
            Get Access
          </button>
        </Link>
      </div>
    </div>
  );
};
