import { createContext, useEffect, useState } from "react";
import styles from "./assets/css/game.module.css";
import backCard from "./assets/card-back.png";
import { PlayerContent } from "./PlayerContents";
import { Button } from "react-bootstrap";
import haha from "./assets/cards-front/0R.png";
import { useRef } from "react";
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
function shuffle() {
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
}

export function Game() {
  const [g, setG] = useState(shuffle);
  const [click, setClick] = useState(0);

  const [player1, setPlayer1] = useState(true);
  const [player2, setPlayer2] = useState(false);
  const [player3, setPlayer3] = useState(false);
  const [player4, setPlayer4] = useState(false);

  const [p1Card, setP1Card] = useState([]);
  const [p2Card, setP2Card] = useState([]);
  const [p3Card, setP3Card] = useState([]);
  const [p4Card, setP4Card] = useState([]);

  const [selectedCard, setSelectedCard] = useState();
  const [turn, setTurn] = useState(1);
  const [counter, setCounter] = useState(2);
  const [limit, setLimit] = useState(1);
  const [start, setStart] = useState(false);
  const [force, setForce] = useState(0);
  let boardCard = useRef([]);

  // useEffect(() => {
  //   if (click == 1) {
  //     setPlayer1(false);
  //     setPlayer3(false);
  //     setPlayer4(false);
  //     setPlayer2(true);
  //     setTurn(2);
  //   } else if (click == 2) {
  //     setPlayer1(false);
  //     setPlayer2(false);
  //     setPlayer4(false);
  //     setPlayer3(true);
  //     setTurn(3);
  //   } else if (click == 3) {
  //     setPlayer1(false);
  //     setPlayer2(false);
  //     setPlayer3(false);
  //     setPlayer4(true);
  //     setTurn(4);
  //   } else if (click == 4) {
  //     setPlayer1(true);
  //     setPlayer2(false);
  //     setPlayer3(false);
  //     setPlayer4(false);
  //     setTurn(1);
  //   }
  // }, [click]);
  function otherCards(player) {
    if (turn == 1 && limit == 1) {
      p1Card.push(g[0]);
      g.shift();
      setP1Card([...p1Card]);
      setLimit(limit + 1);
    }
    if (turn == 2 && limit == 1) {
      p2Card.push(g[0]);
      g.shift();
      setP2Card([...p2Card]);
      setLimit(limit + 1);
    }
    if (turn == 3 && limit == 1) {
      p3Card.push(g[0]);
      g.shift();
      setP3Card([...p3Card]);
      setLimit(limit + 1);
    }
    if (turn == 4 && limit == 1) {
      p4Card.push(g[0]);
      g.shift();
      setP4Card([...p4Card]);
      setLimit(limit + 1);
    }
  }
  useEffect(() => {
    const placedCard = boardCard.current[boardCard.current.length - 1];

    if (player1) {
      if (limit > 1) {
        p1Card.forEach((card) => {
          console.log(card.slice(14, 15) + " and " + placedCard.slice(14, 15));
          console.log(card.slice(15, 16) + " and " + placedCard.slice(15, 16));
          if (
            card.slice(14, 15) !== placedCard.slice(14, 15) ||
            card.slice(15, 16) !== placedCard.slice(15, 16)
          ) {
            setCounter(counter + 1);
            console.log("orj bn");
          }
        });

        console.log(counter);
        if (counter) {
          setTimeout(() => {
            setPlayer2(true);
            setPlayer1(false);
            setPlayer3(false);
            setPlayer4(false);

            console.log("orson2");
          }, 1000);
        }
        setCounter(0);
      }
    }
    if (player2) {
      if (limit > 1) {
        p2Card.forEach((card) => {
          // console.log(card.slice(14, 15));
          if (
            card.slice(14, 15) != placedCard.slice(14, 15) ||
            card.slice(15, 16) != placedCard.slice(15, 16)
          ) {
            setCounter(counter + 1);
          }
        });

        if (counter == 5) {
          setTimeout(() => {
            setPlayer2(false);
            setPlayer1(false);
            setPlayer3(true);
            setPlayer4(false);
            setCounter(0);
            console.log("orson2");
          }, 1000);
        }
      }
    }
    if (player3) {
      if (limit > 1) {
        p3Card.forEach((card) => {
          // console.log(card.slice(14, 15));
          if (
            card.slice(14, 15) != placedCard.slice(14, 15) ||
            card.slice(15, 16) != placedCard.slice(15, 16)
          ) {
            setCounter(counter + 1);
          }
        });

        if (counter >= 5) {
          setTimeout(() => {
            setTurn(4);
            setCounter(0);
            console.log("orson2");
          }, 1000);
        }
        setLimit(0);
      }
    }
    if (player4) {
      if (limit > 1) {
        p4Card.forEach((card) => {
          // console.log(card.slice(14, 15));
          if (
            card.slice(14, 15) == placedCard.slice(14, 15) ||
            card.slice(15, 16) == placedCard.slice(15, 16)
          ) {
            setCounter((prev) => prev + 1);
          }
        });

        if (counter >= 5) {
          setTimeout(() => {
            setPlayer1(true);
            setCounter(0);
            console.log("orson2");
          }, 1000);
        }
      }
    }
  }, [limit]);
  console.log(counter);
  function Check(simg, index, id) {
    console.log(index);
    console.log(simg);
    const placedCard = boardCard.current[boardCard.current.length - 1];

    console.log(simg.slice(14, 15), g[20].slice(14, 15));
    if (player1 && id == 1) {
      if (
        simg.slice(14, 15) == placedCard.slice(14, 15) ||
        simg.slice(15, 16) == placedCard.slice(15, 16)
      ) {
        p1Card.splice(index, 1);

        setG([...g]);
        boardCard.current.push(simg);
        setPlayer1(false);
        setPlayer3(false);
        setPlayer4(false);
        setPlayer2(true);
        setTurn(2);
        setLimit(1);
      }
    }
    if (player2 && id == 2) {
      if (
        simg.slice(14, 15) == placedCard.slice(14, 15) ||
        simg.slice(15, 16) == placedCard.slice(15, 16)
      ) {
        p2Card.splice(index, 1);

        boardCard.current.push(simg);
        setG([...g]);
        setPlayer1(false);
        setPlayer2(false);
        setPlayer4(false);
        setPlayer3(true);
        setTurn(3);
        setLimit(1);
      }
    }
    if (player3) {
      if (
        simg.slice(14, 15) == placedCard.slice(14, 15) ||
        simg.slice(15, 16) == placedCard.slice(15, 16)
      ) {
        p3Card.splice(index, 1);

        setG([...g]);
        boardCard.current.push(simg);
        setPlayer1(false);
        setPlayer2(false);
        setPlayer4(true);
        setPlayer3(false);
        setTurn(4);
        setLimit(1);
      }
    }
    if (player4) {
      if (
        simg.slice(14, 15) == placedCard.slice(14, 15) ||
        simg.slice(15, 16) == placedCard.slice(15, 16)
      ) {
        p4Card.splice(index, 1);

        setG([...g]);
        boardCard.current.push(simg);
        setPlayer1(true);
        setPlayer2(false);
        setPlayer4(false);
        setPlayer3(false);
        setTurn(1);
        setLimit(1);
      }
    }
  }
  // setG([...g]);

  // console.log(haha)

  useEffect(() => {
    console.log(g);
    while (p1Card.length !== 5) {
      p1Card.push(g[0]);

      g.splice(0, 1);
    }
    while (p2Card.length !== 5) {
      p2Card.push(g[0]);
      g.splice(0, 1);
    }
    while (p3Card.length !== 5) {
      p3Card.push(g[0]);
      g.splice(0, 1);
    }
    while (p4Card.length !== 5) {
      p4Card.push(g[0]);
      g.splice(0, 1);
    }
    setP1Card([...p1Card]);
    setP2Card([...p2Card]);
    setP3Card([...p3Card]);
    setP4Card([...p4Card]);

    boardCard.current.push(g[20]);
  }, []);

  // console.log(g[20]);
  // console.log(boardCard);
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
              {p1Card.map((card, index) => {
                return (
                  <PlayerContent
                    selectedCard={selectedCard}
                    id={1}
                    index={index}
                    img={player1 ? card : backCard}
                  />
                );
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
              {p2Card.map((card, index) => {
                return <PlayerContent id={2} img={player2 ? card : backCard} />;
              })}
            </div>
          </div>
        </div>

        <div className={styles.playSection}>
          <img
            className={styles.sectorCards}
            src={backCard}
            onClick={() => otherCards()}
          />
          <img
            className={styles.sectorCards}
            src={boardCard.current[boardCard.current.length - 1]}
          />
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
              {p3Card.map((card, index) => {
                return <PlayerContent id={3} img={player3 ? card : backCard} />;
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
              {p4Card.map((card, index) => {
                return <PlayerContent id={4} img={player4 ? card : backCard} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
