import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useRef } from "react";

const Box = (props) => {
  if(props.isRemoved == true) {
    return <div className="box done">{props.value.id}</div>;
  }
  if(props.isSelected == true) {
    return <div className="box Insert">{props.value.id}</div>;
  }
  return <div onClick = {() => props.checked(props.index)}  className="box">{props.value.id}</div>;
  
};
const d = d;
function App() {
  const choosed = useRef([]) 
  const [arr, setArr] = useState([
    { isRemoved: false, isSelect: false, id: 1 },
    { isRemoved: false, isSelect: false, id: 1 },
    { isRemoved: false, isSelect: false, id: 2 },
    { isRemoved: false, isSelect: false, id: 2 },
    { isRemoved: false, isSelect: false, id: 3 },
    { isRemoved: false, isSelect: false, id: 3 },
    { isRemoved: false, isSelect: false, id: 4 },
    { isRemoved: false, isSelect: false, id: 4 },
    { isRemoved: false, isSelect: false, id: 5 },
    { isRemoved: false, isSelect: false, id: 5 },
    { isRemoved: false, isSelect: false, id: 6 },
    { isRemoved: false, isSelect: false, id: 6 },
    { isRemoved: false, isSelect: false, id: 7 },
    { isRemoved: false, isSelect: false, id: 7 },
    { isRemoved: false, isSelect: false, id: 8 },
    { isRemoved: false, isSelect: false, id: 8 },
  ]);

  let picked = []

  useEffect(() => {
    function shuffle() {
      setArr((prev) => {
        const arr = [...prev];
        let currentIndex = arr.length,
          randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          // And swap it with the current element.
          [arr[currentIndex].id, arr[randomIndex].id] = [
            arr[randomIndex].id,
            arr[currentIndex].id,
          ];
        }

        return arr;
      });
    }
    shuffle();
  }, []);

  // function moveKeys(event) {
    
  //   if (event.key == "a" && insert % 4 !== 0) {
  //     setInsert(insert - 1);
  //   }
  //   if (
  //     event.key == "d" &&
  //     insert !== 3 &&
  //     insert !== 7 &&
  //     insert !== 11 &&
  //     insert !== 15
  //   ) {
  //     setInsert(insert + 1);
  //   }
  //   if (event.key == "w" && insert >= 4) {
  //     setInsert(insert - 4);
  //   }
  //   if (event.key == "s" && insert < 12) {
  //     setInsert(insert + 4);
  //   }

    
  // }



  const checked = (index) => {
    
    console.log(index)
    arr[index].isSelect = true
    // choosed.current.push(index)
    picked.push[index]
    if(choosed.length === 2) {
      if(choosed[0].id === choosed[1].id) {
        console.log('gg')
        choosed[0].isRemoved = true
        choosed[1].isRemoved = true
      }
    }
  }
  

  return (
    <div className="App">
      <div class="boxCont">
        {arr.map((box, index) => (
          <Box
            value={box}
            isSelected={arr.isSelect}
            isRemoved={arr.isRemoved}
            checked = {checked}
            index = {index}
        
          ></Box>
        ))}
      </div>
    </div>
  );
}

export default App;
