import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const Box = (props) => {

  if (props.index == props.insert[0]) {
    return <div className="Insert"></div>
  } else {
    return <div className="box"></div>;
  }
};



function App() {
  const [insert, setInsert] = useState(0)
  const jaja = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [arr, setArr] = useState(jaja);

  function moveKeys(event, props) {
    console.log(event.key)
    console.log(insert)
    if (event.key == "a" && insert > 0) {
      setInsert(insert - 1)
    }

    if (event.key == "d") {
      setInsert(insert + 1)
    }
    if (event.key == "w" && insert > 1) {

      setInsert(insert - 4)
    }
    if (event.key == "s") {
      setInsert(insert + 4)
    }
  }

  document.onkeydown = moveKeys


  return (
    <div className="App">
      <div class="boxCont">
        {arr.map((box, index) => (
          <Box index={index} insert={[insert, setInsert]}></Box>
        ))}
      </div>
    </div>
  );
}

export default App;
