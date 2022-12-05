import { createContext, useEffect, useState } from "react";
import styles from "./assets/css/game.module.css";
import backCard from "./assets/card-back.png";
import { PlayerContent } from "./PlayerContents";
import { Button } from "react-bootstrap";
import haha from "./assets/cards-front/0R.png";
export const ThemeContext = createContext({});
const cards = [
  "./assets/cards-front/0R.png",
  "./assets/cards-front/1R.png",
  "./assets/cards-front/1R.png",
  "./assets/cards-front/2R.png",
  "./assets/cards-front/2R.png",
  "./assets/cards-front/3R.png",
  "./assets/cards-front/3R.png",
  "./assets/cards-front/4R.png",
  "./assets/cards-front/4R.png",
  "./assets/cards-front/5R.png",
  "./assets/cards-front/5R.png",
  "./assets/cards-front/6R.png",
  "./assets/cards-front/6R.png",
  "./assets/cards-front/7R.png",
  "./assets/cards-front/7R.png",
  "./assets/cards-front/8R.png",
  "./assets/cards-front/8R.png",
  "./assets/cards-front/9R.png",
  "./assets/cards-front/9R.png",

  "./assets/cards-front/_R.png",
  "./assets/cards-front/_R.png",

  "./assets/cards-front/0G.png",
  "./assets/cards-front/1G.png",
  "./assets/cards-front/1G.png",
  "./assets/cards-front/2G.png",
  "./assets/cards-front/2G.png",
  "./assets/cards-front/3G.png",
  "./assets/cards-front/3G.png",
  "./assets/cards-front/4G.png",
  "./assets/cards-front/4G.png",
  "./assets/cards-front/5G.png",
  "./assets/cards-front/5G.png",
  "./assets/cards-front/6G.png",
  "./assets/cards-front/6G.png",
  "./assets/cards-front/7G.png",
  "./assets/cards-front/7G.png",
  "./assets/cards-front/8G.png",
  "./assets/cards-front/8G.png",
  "./assets/cards-front/9G.png",
  "./assets/cards-front/9G.png",

  "./assets/cards-front/_G.png",
  "./assets/cards-front/_G.png",
  "./assets/cards-front/0B.png",
  "./assets/cards-front/1B.png",
  "./assets/cards-front/1B.png",
  "./assets/cards-front/2B.png",
  "./assets/cards-front/2B.png",
  "./assets/cards-front/3B.png",
  "./assets/cards-front/3B.png",
  "./assets/cards-front/4B.png",
  "./assets/cards-front/4B.png",
  "./assets/cards-front/5B.png",
  "./assets/cards-front/5B.png",
  "./assets/cards-front/6B.png",
  "./assets/cards-front/6B.png",
  "./assets/cards-front/7B.png",
  "./assets/cards-front/7B.png",
  "./assets/cards-front/8B.png",
  "./assets/cards-front/8B.png",
  "./assets/cards-front/9B.png",
  "./assets/cards-front/9B.png",
  "./assets/cards-front/_B.png",
  "./assets/cards-front/_B.png",
  "./assets/cards-front/0Y.png",
  "./assets/cards-front/1Y.png",
  "./assets/cards-front/1Y.png",
  "./assets/cards-front/2Y.png",
  "./assets/cards-front/2Y.png",
  "./assets/cards-front/3Y.png",
  "./assets/cards-front/3Y.png",
  "./assets/cards-front/4Y.png",
  "./assets/cards-front/4Y.png",
  "./assets/cards-front/5Y.png",
  "./assets/cards-front/5Y.png",
  "./assets/cards-front/6Y.png",
  "./assets/cards-front/6Y.png",
  "./assets/cards-front/7Y.png",
  "./assets/cards-front/7Y.png",
  "./assets/cards-front/8Y.png",
  "./assets/cards-front/8Y.png",
  "./assets/cards-front/9Y.png",
  "./assets/cards-front/9Y.png",
  "./assets/cards-front/_Y.png",
  "./assets/cards-front/_Y.png",
  "./assets/cards-front/W.png",
  "./assets/cards-front/W.png",
  "./assets/cards-front/W.png",
  "./assets/cards-front/W.png",
];
const arr = cards.map((name) => require(`${name}`));
export function Game() {
  const [g, setG] = useState([]);
  const [click, setClick] = useState(0);

  // console.log(g);
  const [player1, setPlayer1] = useState(true);
  const [player2, setPlayer2] = useState(false);
  const [player3, setPlayer3] = useState(false);
  const [player4, setPlayer4] = useState(false);
  const [selectedCard, setSelectedCard] = useState();
  const [boardCard, setBoardCard] = useState();
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

  function Check(simg) {
    if (selectedCard !== undefined) {
      setSelectedCard(simg);
      // selectedCard.split("media/")[0];
      console.log(selectedCard);
      // if(boardCard ===)
    }
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
  console.log(g);
  // console.log(selectedCard);
  return (
    <ThemeContext.Provider value={{ click, setClick, setSelectedCard, Check }}>
      <div className={styles.Container}>
        <div className={styles.gameStart}>
          <Button onClick={() => setStart(true)} variant="info">
            Start
          </Button>
          <span
            className={
              start ? `${styles.turnText} ${styles.started}` : styles.turnText
            }>
            Player : {turn} turn{" "}
          </span>
        </div>

        <div
          className={
            start
              ? `${styles.player1Cont} ${styles.started}`
              : styles.player1Cont
          }>
          <div
            className={
              player1 ? `${styles.player1} ${styles.turn}` : styles.player1
            }>
            <span className={styles.playerText}>Player 1:</span>
            <div className={styles.card}>
              {g.map((card, index) => {
                if (index <= 4 && start) {
                  return (
                    <PlayerContent
                      selectedCard={selectedCard}
                      id={1}
                      img={player1 ? card : backCard}
                    />
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
          }>
          <div
            className={
              player2 ? `${styles.player2} ${styles.turn}` : styles.player2
            }>
            <span className={styles.playerText}>Player: 2</span>
            <div className={styles.card}>
              {g.map((card, index) => {
                if (index >= 5 && index <= 9 && start) {
                  return (
                    <PlayerContent id={2} img={player2 ? card : backCard} />
                  );
                }
              })}
            </div>
          </div>
        </div>

        <div className={styles.playSection}>
          {g.map((card, index) => {
            if (index >= 15 && index < 16 && start) {
              // setBoardCard(card);
              return <img className={styles.sectorCards} src={card} />;
            }
          })}
        </div>

        <div
          className={
            start
              ? `${styles.player3Cont} ${styles.started}`
              : styles.player3Cont
          }>
          <div
            className={
              player3 ? `${styles.player2} ${styles.turn}` : styles.player2
            }>
            <span className={styles.playerText}>Player: 3</span>
            <div className={styles.card}>
              {g.map((card, index) => {
                if (index >= 10 && index <= 14 && start) {
                  return (
                    <PlayerContent id={3} img={player3 ? card : backCard} />
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
          }>
          <div
            className={
              player4 ? `${styles.player1} ${styles.turn}` : styles.player1
            }>
            <span className={styles.playerText}>Player: 4</span>
            <div className={styles.card}>
              {g.map((card, index) => {
                if (index >= 15 && index <= 19 && start) {
                  return (
                    <PlayerContent id={4} img={player4 ? card : backCard} />
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
