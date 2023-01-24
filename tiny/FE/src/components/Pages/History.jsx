import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "../assets/history.module.css";
import Logo from "../assets/img/logo-default.svg";
import { AuthContext } from "../context/AuthProvider";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
export const History = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loadingCont}>
          <ClimbingBoxLoader color="#02b589" size={30} />
          {/* <span>Loading...</span> */}
        </div>
      ) : (
        <div className={styles.innerContainer}>
          <img onClick={() => navigate("/")} src={Logo}></img>
          <div className={styles.hisContainer}>
            <span className={styles.hTitle}>Түүх</span>
            {user &&
              user.history.map((item, index) => {
                console.log(item);
                return (
                  item.full &&
                  item.short && (
                    <>
                      <div className={styles.urlContainer}>
                        <div className={styles.fullContainer}>
                          <span className={styles.hTexts}>
                            Өгөгдсөн холбоос:
                          </span>
                          <a href={item.full}>
                            {item.full.length > 24 &&
                              item.full.slice(0, 26) + "..."}
                            {item.full.length < 24 && item.full}
                          </a>
                        </div>
                        <div className={styles.fullContainer}>
                          <span className={styles.hTexts}>Богино холбоос:</span>
                          <div>
                            <a href={`http://localhost:9000/${item.short}`}>
                              localhost:9000/{item.short}
                            </a>
                            <span className={styles.copy}>Хуулж авах</span>
                          </div>
                        </div>
                      </div>
                      <hr></hr>
                    </>
                  )
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};
