import "./App.css";
import { useEffect, useState, useRef } from "react";
import { WinAlert } from "./WinAlert";
// import { v4 as uuidv4 } from "uuid";

const Box = (props, gg) => {
  if (props.Removed === true && props.index === props.selected[0]) {
    return <div className="box done">{props.value}</div>;
  }

  if (props.Removed === true) {
    return <div className="box done">{props.value}</div>;
  }
  if (props.Selected === true) {
    return <div className="box insert">{props.value}</div>;
  }

  if (props.index === props.selected[0]) {
    return <div className="box insert"></div>;
  }
  if (gg.isWon == true) {
    // document.body.style.backgroundColor = "red"
    console.log(gg.isWon)

  }
  return <div className="box"></div>;
};

function App() {
  let choosed = useRef([]);
  const [gg, setGg] = useState({ isWon: false });
  const [win, setWin] = useState(1);
  const [count, setCount] = useState(0);
  const [insert, setInsert] = useState(0);
  const [arr, setArr] = useState([
    { isSelected: false, isRemoved: false, id: 1 },
    { isSelected: false, isRemoved: false, id: 1 },
    { isSelected: false, isRemoved: false, id: 2 },
    { isSelected: false, isRemoved: false, id: 2 },
    { isSelected: false, isRemoved: false, id: 3 },
    { isSelected: false, isRemoved: false, id: 3 },
    { isSelected: false, isRemoved: false, id: 4 },
    { isSelected: false, isRemoved: false, id: 4 },
    { isSelected: false, isRemoved: false, id: 5 },
    { isSelected: false, isRemoved: false, id: 5 },
    { isSelected: false, isRemoved: false, id: 6 },
    { isSelected: false, isRemoved: false, id: 6 },
    { isSelected: false, isRemoved: false, id: 7 },
    { isSelected: false, isRemoved: false, id: 7 },
    { isSelected: false, isRemoved: false, id: 8 },
    { isSelected: false, isRemoved: false, id: 8 },
  ]);

  document.onkeydown = move;

  //Move keys with: w,s,a,d
  function move(e) {
    if (e.key === "w" && insert >= 4) {
      setInsert(insert - 4);
    } else if (e.key === "s" && insert < 12) {
      setInsert(insert + 4);
    } else if (e.key === "a" && insert % 4 !== 0) {
      setInsert(insert - 1);
    } else if (
      e.key === "d" &&
      insert !== 3 &&
      insert !== 7 &&
      insert !== 11 &&
      insert !== 15
    ) {
      setInsert(insert + 1);
    }

    if (
      e.key === " " &&
      arr[insert].isRemoved === false &&
      insert !== choosed.current[0] &&
      (count == 1 || count == 0)
    ) {
      check();
    }
  }

  //Check the cards if their id is same
  function check() {
    arr[insert].isSelected = true;
    choosed.current.push(insert);
    setCount(count + 1);
    if (count === 1) {
      if (arr[choosed.current[0]].id === arr[choosed.current[1]].id) {
        arr[choosed.current[0]].isRemoved = true;
        arr[choosed.current[1]].isRemoved = true;
        setWin(win + 1);
        choosed.current = [];
        setCount(0);
        console.log(win);
        
        return;
      }

      setTimeout(() => {
        arr[choosed.current[0]].isSelected = false;
        arr[choosed.current[1]].isSelected = false;
        choosed.current = [];
        setCount(0);
        return;
      }, 1000);
    }
  }

  //Randomize the box array
  useEffect(() => {
    function shuffle() {
      setArr((prev) => {
        const arr = [...prev];
        let currentIndex = arr.length,
          randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
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

  const Retry = () => {

    setWin(0)
    setCount(0)
    setInsert(0)
    arr.forEach((item, index) => {
      item.isSelected = false
      item.isRemoved = false

    })
    setArr((prev) => {
      const arr = [...prev];
      let currentIndex = arr.length,
        randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex !== 0) {
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

  return (
    <>
      <div className={win == 8 ? "App blurred" : "App"}>
      <div className="contDiv">
        <p>Find Pairs</p>
        <div className="boxCont">
          {arr.map((box, index) => (
            <Box
              // key={uuidv4()}
              Selected={box.isSelected}
              Removed={box.isRemoved}
              value={box.id}
              index={index}
              selected={[insert, setInsert]}
            ></Box>
          ))}
        </div>
      </div>
    </div>

      {win == 8 && <div className="WinWrapperCont"><WinAlert Retry={Retry} /></div>}
    </>


  );
}

export default App;
