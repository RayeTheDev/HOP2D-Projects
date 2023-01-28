import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "../assets/history.module.css";
import Logo from "../assets/img/logo-default.svg";
import { AuthContext } from "../context/AuthProvider";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { client } from "../Client/useInstance";
import { Pagination, PaginationComp } from "../Pagination";

export const History = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [historyPerPage, setHistoryPerPage] = useState(5);
  // const [currentHistory, setCurrentHistory] = useState();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

  }, []);
  useEffect(() => {
    if (user)
    client
      .get("/user/" + user._id +'?skip=0')
      .then((res) => {  
        setHistory(res.data.history);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [user])



  const paginate = (pageNumber) => {

    setCurrentPage(pageNumber);
    client.get('/user/' + user._id + `?skip=${pageNumber - 1}`)
    .then((res) => {
      setHistory(res.data.history);
    }).catch((err) => {
      console.log(err)
    })
  };

console.log(history)
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loadingCont}>
          <ClimbingBoxLoader color="#02b589" size={30} />
        </div>
      ) : (
        <div className={styles.innerContainer}>
          <img onClick={() => navigate("/")} src={Logo}></img>
          <div className={styles.hisContainer}>
            <span className={styles.hTitle}>Түүх</span>
            {history &&
              history.map((item, index) => {
                return (
                  item.full &&
                  item.short && (
                    <>
                      <div className={styles.urlContainer} key={index + item * 8}>
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
          <PaginationComp
            historyPerPage={historyPerPage}
            totalHistory={history && history.length}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
};
