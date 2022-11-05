import styles from "./css/header.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


export const Header = (props) => {
  const [css, setCss] = useState(false);
  let location = useLocation();
//   console.log(location);

  useEffect(() => {
    if (location.pathname !== "/") {
      setCss(true);
    } else {
      setCss(false);
    }
  }, [location]);

  return (
    <div className={styles.hContainer}>
      <Link to="/">
        <img className={styles.img} src={css ? props.image2 : props.image} />
      </Link>

      {/* <Link to="/"></Link> */}

      <div className={styles.textsContainer}>

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
