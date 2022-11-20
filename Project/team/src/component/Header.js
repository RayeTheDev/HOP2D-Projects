import styles from "./css/header.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { ThemeContext } from "../App.js";
import { GoThreeBars } from "react-icons/go";
import { CiDark } from "react-icons/ci";
import Dropdown from 'react-bootstrap/Dropdown';

export const Header = (props) => {
  const { theme, changeDarkTheme, css, setCss, bg, setFix } = useContext(ThemeContext);
  let location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") {
      setCss(true);
    } else {
      setCss(false)
    }
  }, [location]);
  window.addEventListener("scroll", setFix);

  return (
    <div className={bg ? styles.hContainerBg : styles.hContainer}>
      <Link to="/">
        <img className={styles.img} src={css ? props.image2 : props.image}
        />
      </Link>

      <div className={styles.textsContainer}>
        <CiDark className={styles.darkIcon} />
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
      <Dropdown className={css ? `${styles.bar3} ${styles.barChange}` : styles.bar3}>

        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <GoThreeBars />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">
            <Link to="/blogs" className={styles.change}>
              Blogs
            </Link>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            <Link to="/products" className={styles.change}>
              Products
            </Link>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            <Link to="/services" className={styles.change}>
              Services
            </Link>
          </Dropdown.Item>

          <Dropdown.Item href="#/action-3">
            <Link to="/contact" className={styles.change}>
              Contact
            </Link>
          </Dropdown.Item>

          <Dropdown.Item href="#/action-3">
            <Link to="/login" className={styles.change}>
              Log In
            </Link>
          </Dropdown.Item>

          <Dropdown.Item href="#/action-3">
            <Link to="/getaccess" className={styles.change}>
              Get Access
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
