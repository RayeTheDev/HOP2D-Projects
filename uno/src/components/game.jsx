import { createContext, useEffect, useState } from "react";
import styles from "./assets/css/game.module.css";
import backCard from "./assets/card-back.png";
import { PlayerContent } from "./PlayerContents";
import { Button } from "react-bootstrap";

export const ThemeContext = createContext({});
const cards = [
  "0R",
  "1R",
  "1R",
  "2R",
  "2R",
  "3R",
  "3R",
  "4R",
  "4R",
  "5R",
  "5R",
  "6R",
  "6R",
  "7R",
  "7R",
  "8R",
  "8R",
  "9R",
  "9R",
  "skipR",
  "skipR",
  "_R",
  "_R",
  "D2R",
  "D2R",
  "0G",
  "1G",
  "1G",
  "2G",
  "2G",
  "3G",
  "3G",
  "4G",
  "4G",
  "5G",
  "5G",
  "6G",
  "6G",
  "7G",
  "7G",
  "8G",
  "8G",
  "9G",
  "9G",
  "skipG",
  "skipG",
  "_G",
  "_G",
  "D2G",
  "D2G",
  "0B",
  "1B",
  "1B",
  "2B",
  "2B",
  "3B",
  "3B",
  "4B",
  "4B",
  "5B",
  "5B",
  "6B",
  "6B",
  "7B",
  "7B",
  "8B",
  "8B",
  "9B",
  "9B",
  "skipB",
  "skipB",
  "_B",
  "_B",
  "D2B",
  "D2B",
  "0Y",
  "1Y",
  "1Y",
  "2Y",
  "2Y",
  "3Y",
  "3Y",
  "4Y",
  "4Y",
  "5Y",
  "5Y",
  "6Y",
  "6Y",
  "7Y",
  "7Y",
  "8Y",
  "8Y",
  "9Y",
  "9Y",
  "skipY",
  "skipY",
  "_Y",
  "_Y",
  "D2Y",
  "D2Y",
  "W",
  "W",
  "W",
  "W",
  "D4W",
  "D4W",
  "D4W",
  "D4W",
];

const cardCopy = []
const arr = cards.map((name) => require(`./assets/cards-front/${name}.png`));

export function Game() {
  const h = "general";
  const k = 'generl';
  console.log(h === k)

  const [g, setG] = useState([]);
  const [click, setClick] = useState(0);
  console.log(g);
  const [player1, setPlayer1] = useState(true);
  const [player2, setPlayer2] = useState(false);
  const [player3, setPlayer3] = useState(false);
  const [player4, setPlayer4] = useState(false);
  const [selectedCard, setSelectedCard] = useState("")
  const [turn, setTurn] = useState(1);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (click == 1) {
      setPlayer1(false);
      setPlayer3(false);
      setPlayer4(false);
      setPlayer2(true);
      setTurn(2);
    } else if (click == 2) {
      setPlayer1(false);
      setPlayer2(false);
      setPlayer4(false);
      setPlayer3(true);
      setTurn(3);
    } else if (click == 3) {
      setPlayer1(false);
      setPlayer2(false);
      setPlayer3(false);
      setPlayer4(true);
      setTurn(4);
    } else if (click == 4) {
      setPlayer1(true);
      setPlayer2(false);
      setPlayer3(false);
      setPlayer4(false);
      setTurn(1);
    }
  }, [click]);

  function Check() {

  }

  useEffect(() => {
    function shuffle() {
      setG(() => {
        let currentIndex = arr.length,
          randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          // And swap it with the current element.
          [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex],
            arr[currentIndex],
          ];
        }
        return arr;
      });
    }

    shuffle();
  }, []);

  return (
    <ThemeContext.Provider value={{ click, setClick }}>
      <div className={styles.Container}>
        <div className={styles.gameStart}>
          <Button onClick={() => setStart(true)} variant="info">
            Start
          </Button>
          <span className={start ? `${styles.turnText} ${styles.started}` : styles.turnText}>Player : {turn} turn </span>
        </div>

        <div
          className={
            start
              ? `${styles.player1Cont} ${styles.started}`
              : styles.player1Cont
          }
        >
          <div
            className={
              player1 ? `${styles.player1} ${styles.turn}` : styles.player1
            }
          >
            <span className={styles.playerText}>Player 1:</span>
            <div className={styles.card}>
              {g.map((img, index) => {
                if (index <= 4 && start) {
                  return (
                    <PlayerContent id={1} img={player1 ? img : backCard} />
                  );
                }
              })}
            </div>
          </div>
        </div>

        <div
          className={
            start
              ? `${styles.player2Cont} ${styles.started}`
              : styles.player2Cont
          }
        >
          <div
            className={
              player2 ? `${styles.player2} ${styles.turn}` : styles.player2
            }
          >
            <span className={styles.playerText}>Player: 2</span>
            <div className={styles.card}>
              {g.map((img, index) => {
                if (index >= 5 && index <= 9 && start) {
                  return (
                    <PlayerContent id={2} img={player2 ? img : backCard} />
                  );
                }
              })}
            </div>
          </div>
        </div>

        <div className={styles.playSection}>
          {g.map((img, index) => {
            if (index >= 15 && index < 16 && start) {
              return <img className={styles.sectorCards} src={img} />;
            }
          })}
        </div>

        <div
          className={
            start
              ? `${styles.player3Cont} ${styles.started}`
              : styles.player3Cont
          }
        >
          <div
            className={
              player3 ? `${styles.player2} ${styles.turn}` : styles.player2
            }
          >
            <span className={styles.playerText}>Player: 3</span>
            <div className={styles.card}>
              {g.map((img, index) => {
                if (index >= 10 && index <= 14 && start) {
                  return (
                    <PlayerContent id={3} img={player3 ? img : backCard} />
                  );
                }
              })}
            </div>
          </div>
        </div>
    
        <div
          className={
            start
              ? `${styles.player4Cont} ${styles.started}`
              : styles.player4Cont
          }
        >
          <div
            className={
              player4 ? `${styles.player1} ${styles.turn}` : styles.player1
            }
          >
            <span className={styles.playerText}>Player: 4</span>
            <div className={styles.card}>
              {g.map((img, index) => {
                if (index >= 15 && index <= 19 && start) {
                  return (
                    <PlayerContent id={4} img={player4 ? img : backCard} />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
