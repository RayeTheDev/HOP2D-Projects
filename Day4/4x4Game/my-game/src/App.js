import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const Box = (props) => {
  if (props.index == props.insert[0]) {
    return <div className="box Insert">{props.value}</div>;
  } else {
    return <div className="box">{props.value}</div>;
  }
};

function App() {
  const [insert, setInsert] = useState(0);
   const value = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
  const [data, setData] = useState([{ value: value[Math.floor(Math.random() * value.length)], id: "", isSelected: false }]);
  const jaja = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
 
  const [arr, setArr] = useState(jaja);




  // function shuffle(value) {
  //   let currentIndex = value.length,  randomIndex;

  //   // While there remain elements to shuffle.
  //   while (currentIndex != 0) {

  //     // Pick a remaining element.
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;

  //     // And swap it with the current element.
  //     [value[currentIndex], value[randomIndex]] = [
  //       value[randomIndex], value[currentIndex]];
  //   }

  //   return value;
  // }
  // shuffle()

  function moveKeys(event) {
    console.log(event.key);
    console.log(insert);
    if (event.key == "a" && insert > 0) {
      setInsert(insert - 1);
    }

    if (event.key == "d") {
      setInsert(insert + 1);
    }
    if (event.key == "w" && insert > 1) {
      setInsert(insert - 4);
    }
    if (event.key == "s") {
      setInsert(insert + 4);
    }
  }

  document.onkeydown = moveKeys;

  return (
    <div className="App">
      <div class="boxCont">
        {arr.map((box, index) => (
          <Box value={value} index={index} insert={[insert, setInsert]}></Box>
        ))}
      </div>
    </div>
  );
}

export default App;
