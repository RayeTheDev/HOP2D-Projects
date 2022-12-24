import { createContext, useEffect, useState } from "react";
import styles from "./assets/css/game.module.css";
import backCard from "./assets/card-back.png";
import { PlayerContent } from "./PlayerContents";
import { Button } from "react-bootstrap";
import haha from "./assets/cards-front/0R.png";
import { useRef } from "react";
import { Win } from "./Win";
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

  "./assets/cards-front/D2B.png",
  "./assets/cards-front/D2Y.png",
  "./assets/cards-front/D2G.png",
  "./assets/cards-front/D2R.png",
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
  const [isReversed, setIsReversed] = useState(false);
  let audit = useRef(0);
  let GG = useRef(0);
  const [turn, setTurn] = useState(1);
  const [counter, setCounter] = useState(0);
  const [pWinner, setPWinner] = useState(null);
  const [limit, setLimit] = useState(1);
  const [start, setStart] = useState(false);
  const [won, setWon] = useState(false);
  const [takeCard, setTakeCard] = useState(false);
  let boardCard = useRef([]);

  function p1Tools() {
    setPlayer1(false);
    setPlayer3(false);
    setPlayer4(false);
    setPlayer2(true);
    setTurn(2);
    setLimit(1);
  }
  function p2Tools() {
    setPlayer1(false);
    setPlayer2(false);
    setPlayer4(false);
    setPlayer3(true);
    setTurn(3);
    setLimit(1);
  }

  function p3Tools() {
    setPlayer1(false);
    setPlayer2(false);
    setPlayer4(true);
    setPlayer3(false);
    setTurn(4);
    setLimit(1);
  }
  function p4Tools() {
    setPlayer1(true);
    setPlayer2(false);
    setPlayer4(false);
    setPlayer3(false);
    setTurn(1);
    setLimit(1);
  }
  function p1RTools() {
    setPlayer1(false);
    setPlayer3(false);
    setPlayer4(true);
    setPlayer2(false);
    setTurn(4);
    setLimit(1);
  }
  function p2RTools() {
    setPlayer1(true);
    setPlayer2(false);
    setPlayer4(false);
    setPlayer3(false);
    setTurn(1);
    setLimit(1);
  }

  function p3RTools() {
    setPlayer1(false);
    setPlayer2(true);
    setPlayer4(false);
    setPlayer3(false);
    setTurn(2);
    setLimit(1);
  }
  function p4RTools() {
    setPlayer1(false);
    setPlayer2(false);
    setPlayer4(false);
    setPlayer3(true);
    setTurn(3);
    setLimit(1);
  }
  function otherCards(player) {
    if (player1 && limit == 1) {
      p1Card.push(g[0]);
      g.shift();
      setP1Card([...p1Card]);
      setLimit(limit + 1);
    }
    if (player2 && limit == 1) {
      p2Card.push(g[0]);
      g.shift();
      setP2Card([...p2Card]);
      setLimit(limit + 1);
    }
    if (player3 && limit == 1) {
      p3Card.push(g[0]);
      g.shift();
      setP3Card([...p3Card]);
      setLimit(limit + 1);
    }
    if (player4 && limit == 1) {
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
        console.log(p1Card.length);
        p1Card.forEach((card) => {
          console.log(card.slice(14, 15) + " and " + placedCard.slice(14, 15));
          console.log(card.slice(15, 16) + " and " + placedCard.slice(15, 16));
          if (placedCard.length == 41) {
            if (
              card.slice(14, 15) == placedCard.slice(14, 15) ||
              card.slice(15, 16) == placedCard.slice(15, 16)
            ) {
              audit.current++;
              console.log("orj bn");
            } else if (card.length == 42) {
              if (card.slice(16, 17) == placedCard.slice(15, 16)) {
                audit.current++; //i++
              }
            }
          }

          if (placedCard.length == 42) {
            if (card.slice(15, 16) == placedCard.slice(16, 17)) {
              audit.current++;
            }
          }
        });

        console.log(audit.current);
        if (audit.current == 0) {
          setTimeout(() => {
            if (isReversed) {
              p1RTools();
              return;
            }
            p1Tools();
            console.log("orson2");
          }, 1000);
        }
        audit.current = 0;
      }
    }

    if (player2) {
      if (limit > 1) {
        p2Card.forEach((card) => {
          if (placedCard.length == 41) {
            if (
              card.slice(14, 15) == placedCard.slice(14, 15) ||
              card.slice(15, 16) == placedCard.slice(15, 16)
            ) {
              audit.current++; //i++
            } else if (card.length == 42) {
              if (card.slice(16, 17) == placedCard.slice(15, 16)) {
                audit.current++; //i++
              }
            }
          }

          if (placedCard.length == 42) {
            if (card.slice(15, 16) == placedCard.slice(16, 17)) {
              audit.current++;
            }
          }
        });

        if (audit.current == 0) {
          setTimeout(() => {
            if (isReversed) {
              p2RTools();
              return;
            }
            p2Tools();
            console.log("orson2");
          }, 1000);
        }
        audit.current = 0;
      }
    }
    if (player3) {
      if (limit > 1) {
        p3Card.forEach((card) => {
          // console.log(card.slice(14, 15));
          if (placedCard.length == 41) {
            if (
              card.slice(14, 15) == placedCard.slice(14, 15) ||
              card.slice(15, 16) == placedCard.slice(15, 16)
            ) {
              audit.current++; //i++
            } else if (card.length == 42) {
              if (card.slice(16, 17) == placedCard.slice(15, 16)) {
                audit.current++; //i++
              }
            }
          }

          if (placedCard.length == 42) {
            if (card.slice(15, 16) == placedCard.slice(16, 17)) {
              audit.current++;
            }
          }
        });

        if (audit.current == 0) {
          setTimeout(() => {
            if (isReversed) {
              p3RTools();
              return;
            }
            p3Tools();
            console.log("orson2");
          }, 1000);
        }
        audit.current = 0;
      }
    }

    if (player4) {
      if (limit > 1) {
        p4Card.forEach((card) => {
          if (placedCard.length == 41) {
            if (
              card.slice(14, 15) == placedCard.slice(14, 15) ||
              card.slice(15, 16) == placedCard.slice(15, 16)
            ) {
              audit.current++; //i++
            } else if (card.length == 42) {
              if (card.slice(16, 17) == placedCard.slice(15, 16)) {
                audit.current++; //i++
              }
            }
          }

          if (placedCard.length == 42) {
            if (card.slice(15, 16) == placedCard.slice(16, 17)) {
              audit.current++;
            }
          }
        });

        if (audit.current == 0) {
          setTimeout(() => {
            if (isReversed) {
              p4RTools();
              return;
            }
            p4Tools();
            console.log("orson2");
          }, 1000);
        }
        audit.current = 0;
      }
    }
  }, [limit]);

  function winner() {
    if (player1) {
      if (p1Card.length == 0) {
        // alert('Player 1 Win')
        setWon(true);
        setPWinner(1);
      }
    }
    if (player2) {
      if (p2Card.length == 0) {
        // alert('Player 2 Win')
        setWon(true);
        setPWinner(2);
      }
    }
    if (player3) {
      if (p3Card.length == 0) {
        // alert('Player 3 Win')
        setWon(true);
        setPWinner(3);
      }
    }
    if (player4) {
      if (p4Card.length == 0) {
        // alert('Player 4 Win')
        setWon(true);
        setPWinner(4);
      }
    }
  }

  useEffect(() => {
    console.log(takeCard);
    if (player1) {
      if (takeCard) {
        p1Card.forEach((card) => {
          if (card.slice(14, 15) == boardCard.current.slice(14, 15)) {
            GG.current++;
          }
        });
        console.log("all matched takeCards: " + GG.current);
        if (GG.current <= 0) {
          setTimeout(() => {
            for (let i = 0; i < 2; i++) {
              p1Card.push(g[0]);
              g.shift();
              setP1Card([...p1Card]);
            }
          }, 1000);
        }
        GG = 0;
        setTakeCard(false);
      }
    }
    if (player2) {
      if (takeCard) {
        p2Card.forEach((card) => {
          if (card.slice(14, 15) == boardCard.current.slice(14, 15)) {
            GG.current++;
          }
        });
        console.log("all matched takeCards: " + GG.current);
        if (GG.current <= 0) {
          console.log("uhaj bna...");
          setTimeout(() => {
            for (let i = 0; i < 2; i++) {
              p2Card.push(g[0]);
              g.shift();
              setP2Card([...p2Card]);
            }
          }, 1000);
        }
        GG = 0;
        setTakeCard(false);
      }
    }
    if (player3) {
      if (takeCard) {
        p3Card.forEach((card) => {
          if (card.slice(14, 15) == boardCard.current.slice(14, 15)) {
            GG.current++;
          }
        });
        console.log("all matched takeCards: " + GG.current);
        if (GG.current <= 0) {
          setTimeout(() => {
            for (let i = 0; i < 2; i++) {
              p3Card.push(g[0]);
              g.shift();
              setP3Card([...p3Card]);
            }
          }, 1000);
        }
        GG = 0;
        setTakeCard(false);
      }
    }
    if (player4) {
      if (takeCard) {
        p1Card.forEach((card) => {
          if (card.slice(14, 15) == boardCard.current.slice(14, 15)) {
            GG.current++;
          }
        });
        console.log("all matched takeCards: " + GG.current);
        if (GG.current <= 0) {
          setTimeout(() => {
            for (let i = 0; i < 2; i++) {
              p4Card.push(g[0]);
              g.shift();
              setP4Card([...p4Card]);
            }
          }, 1000);
        }
      }
      GG = 0;
      setTakeCard(false);
    }
  }, [SpecificCheck]);

  function SpecificCheck(card, placedCard, index) {
    console.log(card.slice(15, 16));
    // +2 cards
    if (placedCard.length == 41) {
      console.log(placedCard.slice(15, 16), card.slice(16, 17));
      if (card.slice(16, 17) == placedCard.slice(15, 16)) {
        setTakeCard(true);
        console.log("2uhah");
        boardCard.current.push(card);
      }
    }
  }
  function Check(simg, index, id) {
    console.log(index);
    console.log(simg);
    const placedCard = boardCard.current[boardCard.current.length - 1];
    console.log(placedCard.slice(16, 17));

    if (player1) {
      console.log(simg.length);
      // console.log(simg);
      if (simg.length == 41) {
        if (simg.slice(14, 15) == "_") {
          if (simg.slice(15, 16) == placedCard.slice(15, 16)) {
            console.log("reverse");
            p1Card.splice(index, 1);
            setP1Card([...p1Card]);
            boardCard.current.push(simg);
            p1RTools();
            if (isReversed) {
              setIsReversed(false);
            } else {
              setIsReversed(true);
            }
            return;
          }
        }
        if (isReversed) {
          if (
            simg.slice(14, 15) == placedCard.slice(14, 15) ||
            simg.slice(15, 16) == placedCard.slice(15, 16)
          ) {
            p1Card.splice(index, 1);
            setP1Card([...p1Card]);
            boardCard.current.push(simg);
            p1RTools();
            return;
          }
        }
        if (
          simg.slice(14, 15) == placedCard.slice(14, 15) ||
          simg.slice(15, 16) == placedCard.slice(15, 16)
        ) {
          p1Card.splice(index, 1);
          setP1Card([...p1Card]);
          boardCard.current.push(simg);
          p1Tools();
        }
        if (placedCard.length == 42) {
          if (simg.slice(15, 16) == placedCard.slice(16, 17)) {
            p1Card.splice(index, 1);
            setP1Card([...p1Card]);
            boardCard.current.push(simg);
            p1Tools();
          }
        }
      } else if (simg.length == 42) {
        SpecificCheck(simg, placedCard, index);
        p1Card.splice(index, 1);
        setP1Card([...p1Card]);
        if (isReversed) {
          p1RTools();
        } else {
          p1Tools();
        }
      }

      winner();
    }
    if (player2) {
      if (simg.length == 41) {
        if (simg.slice(14, 15) == "_") {
          if (simg.slice(15, 16) == placedCard.slice(15, 16)) {
            console.log("reverse");
            p2Card.splice(index, 1);
            setP2Card([...p2Card]);
            boardCard.current.push(simg);
            p2RTools();
            if (isReversed) {
              setIsReversed(false);
            } else {
              setIsReversed(true);
            }
            return;
          }
        }
        if (isReversed) {
          if (
            simg.slice(14, 15) == placedCard.slice(14, 15) ||
            simg.slice(15, 16) == placedCard.slice(15, 16)
          ) {
            p2Card.splice(index, 1);
            setP2Card([...p2Card]);
            boardCard.current.push(simg);
            p2RTools();
            return;
          }
        }
        if (
          simg.slice(14, 15) == placedCard.slice(14, 15) ||
          simg.slice(15, 16) == placedCard.slice(15, 16)
        ) {
          p2Card.splice(index, 1);
          boardCard.current.push(simg);
          setP2Card([...p2Card]);
          p2Tools();
        }
        if (placedCard.length == 42) {
          if (simg.slice(15, 16) == placedCard.slice(16, 17)) {
            p2Card.splice(index, 1);
            setP2Card([...p2Card]);
            boardCard.current.push(simg);
            p2Tools();
          }
        }
      } else if (simg.length == 42) {
        SpecificCheck(simg, placedCard, index);
        p2Card.splice(index, 1);
        setP2Card([...p2Card]);
        if (isReversed) {
          p2RTools();
        } else {
          p2Tools();
        }
      }

      winner();
    }
    if (player3) {
      if (simg.length == 41) {
        if (simg.slice(14, 15) == "_") {
          if (simg.slice(15, 16) == placedCard.slice(15, 16)) {
            console.log("reverse");
            p3Card.splice(index, 1);
            setP3Card([...p3Card]);
            boardCard.current.push(simg);
            p3RTools();
            if (isReversed) {
              setIsReversed(false);
            } else {
              setIsReversed(true);
            }
            return;
          }
        }
        if (isReversed) {
          if (
            simg.slice(14, 15) == placedCard.slice(14, 15) ||
            simg.slice(15, 16) == placedCard.slice(15, 16)
          ) {
            p3Card.splice(index, 1);
            setP3Card([...p3Card]);
            boardCard.current.push(simg);
            p3RTools();
            return;
          }
        }
        if (
          simg.slice(14, 15) == placedCard.slice(14, 15) ||
          simg.slice(15, 16) == placedCard.slice(15, 16)
        ) {
          p3Card.splice(index, 1);
          setP3Card([...p3Card]);
          boardCard.current.push(simg);
          p3Tools();
        }
        if (placedCard.length == 42) {
          if (simg.slice(15, 16) == placedCard.slice(16, 17)) {
            p3Card.splice(index, 1);
            setP3Card([...p3Card]);
            boardCard.current.push(simg);
            p3Tools();
          }
        }
      } else if (simg.length == 42) {
        SpecificCheck(simg, placedCard, index);
        p3Card.splice(index, 1);
        setP3Card([...p3Card]);
        if (isReversed) {
          p3RTools();
        } else {
          p3Tools();
        }
      }

      winner();
    }
    if (player4) {
      if (simg.length == 41) {
        if (simg.slice(14, 15) == "_") {
          if (simg.slice(15, 16) == placedCard.slice(15, 16)) {
            console.log("reverse");
            p4Card.splice(index, 1);
            setP4Card([...p4Card]);
            boardCard.current.push(simg);
            p4RTools();
            if (isReversed) {
              setIsReversed(false);
            } else {
              setIsReversed(true);
            }
            return;
          }
        }
        if (isReversed) {
          if (
            simg.slice(14, 15) == placedCard.slice(14, 15) ||
            simg.slice(15, 16) == placedCard.slice(15, 16)
          ) {
            p4Card.splice(index, 1);
            setP4Card([...p4Card]);
            boardCard.current.push(simg);
            p4RTools();
            return;
          }
        }
        if (
          simg.slice(14, 15) == placedCard.slice(14, 15) ||
          simg.slice(15, 16) == placedCard.slice(15, 16)
        ) {
          p4Card.splice(index, 1);
          setP4Card([...p4Card]);
          boardCard.current.push(simg);
          p4Tools();
        }
        if (placedCard.length == 42) {
          if (simg.slice(15, 16) == placedCard.slice(16, 17)) {
            console.log("+2 der tavisan n");
            p4Card.splice(index, 1);
            setP4Card([...p4Card]);
            boardCard.current.push(simg);
            p4Tools();
          }
        }
      } else if (simg.length == 42) {
        SpecificCheck(simg, placedCard, index);
        p4Card.splice(index, 1);
        setP4Card([...p4Card]);
        if (isReversed) {
          p4RTools();
        } else {
          p4Tools();
        }
      }
    }
  }

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

  return (
    <ThemeContext.Provider value={{ click, setClick, setSelectedCard, Check }}>
      <div
        className={
          won ? `${styles.Container} ${styles.blur}` : styles.Container
        }
      >
        <div
          className={
            start ? `${styles.gameStart} ${styles.none}` : styles.gameStart
          }
        >
          <div>
            <img
              className={styles.uno}
              src="https://upload.wikimedia.org/wikipedia/commons/f/f9/UNO_Logo.svg"
            ></img>

          </div>
          <Button className={styles.startBut} onClick={() => setStart(true)} variant="info">
            Start
          </Button>
        </div>
        <span
          className={
            start ? `${styles.turnText} ${styles.started}` : styles.turnText
          }
        >
          Player : {turn} turn{" "}
        </span>

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
          }
        >
          <div
            className={
              player2 ? `${styles.player2} ${styles.turn}` : styles.player2
            }
          >
            <span className={styles.playerText}>Player: 2</span>
            <div className={styles.card}>
              {p2Card.map((card, index) => {
                return <PlayerContent id={2} img={player2 ? card : backCard} />;
              })}
            </div>
          </div>
        </div>

        <div
          className={
            start
              ? `${styles.playSection} ${styles.display}`
              : styles.playSection
          }
        >
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
          }
        >
          <div
            className={
              player3 ? `${styles.player2} ${styles.turn}` : styles.player2
            }
          >
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
          }
        >
          <div
            className={
              player4 ? `${styles.player1} ${styles.turn}` : styles.player1
            }
          >
            <span className={styles.playerText}>Player: 4</span>
            <div className={styles.card}>
              {p4Card.map((card, index) => {
                return <PlayerContent id={4} img={player4 ? card : backCard} />;
              })}
            </div>
          </div>
        </div>
      </div>

      <Win winner={pWinner} won={won} />
    </ThemeContext.Provider>
  );
}
