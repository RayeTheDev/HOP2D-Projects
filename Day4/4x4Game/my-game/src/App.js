import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const Box = (props) => {
  return <div className="box"></div>;
};

function App() {
  const jaja = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [arr, setArr] = useState(jaja);
  return (
    <div className="App">
      <div class="boxCont">
        {arr.map((box, index) => (
          <Box index={index}></Box>
        ))}
      </div>
    </div>
  );
}

export default App;
