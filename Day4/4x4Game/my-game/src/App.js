import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const Box = (props) => {
  if (props.index == props.insert[0]) {
    return <div className="box Insert">{props.value}</div>;
  } else {
    return <div className="box">{props.value}</div>;
  }
};

function App() {

  const [insert, setInsert] = useState(0);
  const jaja = [1, 1, 2, 2, 3, 4, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
  const [arr, setArr] = useState(jaja);


  useEffect(() => {
    function shuffle() {
      setArr(prev => {

        const arr = [...prev]
        let currentIndex = arr.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          // And swap it with the current element.
          [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]];
        }

        return arr;
      })
    }

    shuffle()
  }, [])

  // arr.map((arr2El, index) => {
  //   arr2El = num[parseInt(Math.random() * num.length)];
  //   let numIndex = num.indexOf(arr2El);
  //   num.splice(numIndex, 1);
  //   arr[index] = arr2El;
  // });

  function moveKeys(event) {
    console.log(event.key);
    if (event.key == "a" && insert % 4 !== 0) {
      setInsert(insert - 1);
    }
    if (event.key == "d" && (insert !== 3 && insert !== 7 && insert !== 11 && insert !== 15)) {
      setInsert(insert + 1);
    }
    if (event.key == "w" && insert >= 4) {
      setInsert(insert - 4);
    }
    if (event.key == "s" && insert < 12) {
      setInsert(insert + 4);
    }

    if (event.key == "Space") {

    }
  }

  document.onkeydown = moveKeys;

  return (
    <div className="App">
      <div class="boxCont">
        {arr.map((box, index) => (
          <Box value={box} index={index} insert={[insert, setInsert]}></Box>
        ))}
      </div>
    </div>
  );
}

export default App;

