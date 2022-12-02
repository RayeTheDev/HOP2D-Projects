import { useEffect, useState } from "react";
import styles from "./assets/css/game.module.css";
import backCard from "./assets/card-back.png";
import { PlayerContent } from "./PlayerContents";

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
const arr = cards.map((name) => require(`./assets/cards-front/${name}.png`));

export function Game() {
  const [g, setG] = useState([]);
  const [click, setClick] = useState(false);
  console.log(g);

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
    <div className={styles.Container}>
      <div className={styles.player1Cont}>
        <div className={styles.player1}>
          <span className={styles.playerText}>Player 1:</span>
          <div className={styles.card}>
            {g.map((img, index) => {
              if (index <= 4) {
                return <PlayerContent img={click ? img : backCard} />;
              }
            })}
          </div>
        </div>
      </div>

      <div className={styles.player2Cont}>
        <div className={styles.player2}>
          <span className={styles.playerText}>Player: 2</span>
          <div className={styles.card}>
            {g.map((img, index) => {
              if (index >= 5 && index <= 9) {
                return <PlayerContent img={click ? img : backCard} />;
              }
            })}
          </div>
        </div>
      </div>

      <div className={styles.playSection}>
        {g.map((img, index) => {
          if (index >= 15 && index < 16) {
            return <img className={styles.sectorCards} src={img} />;
          }
        })}
      </div>

      <div className={styles.player3Cont}>
        <div className={styles.player2}>
          <span className={styles.playerText}>Player: 3</span>
          <div className={styles.card}>
            {g.map((img, index) => {
              if (index >= 10 && index <= 14) {
                return <PlayerContent img={click ? img : backCard} />;
              }
            })}
          </div>
        </div>
      </div>
      <div className={styles.player4Cont}>
        <div className={styles.player1}>
          <span className={styles.playerText}>Player: 4</span>
          <div className={styles.card}>
            {g.map((img, index) => {
              if (index >= 15 && index <= 19) {
                return <PlayerContent img={click ? img : backCard} />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
