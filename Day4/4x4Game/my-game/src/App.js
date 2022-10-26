import "./App.css";
import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const Box = (props) => {
  // if (props.R === true && props.index === props.selected[0]) {
  //   return <div className="box done">{props.value}</div>
  // }

  if (props.R === true) {
    return <div className="box done">{props.value}</div>

  }
  if (props.S === true) {
    return <div className="box insert">{props.value}</div>
  }

  if (props.index === props.selected[0]) {
    return <div className="box insert"></div>
  }

  return <div className="box"></div>

};


function App() {
  let choosed = useRef([]);
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


  document.onkeydown = moveAndCheck;
  function moveAndCheck(e) {

    if (e.key === 'w' && insert >= 4) {


      setInsert(insert - 4);
    } else if (e.key === 's' && insert < 12) {


      setInsert(insert + 4);
    } else if (e.key === 'a' && insert % 4 !== 0) {


      setInsert(insert - 1);
    } else if (
      e.key === 'd' &&
      insert !== 3 &&
      insert !== 7 &&
      insert !== 11 &&
      insert !== 15
    ) {
      setInsert(insert + 1);
    }

    if (
      e.key === ' ' &&
      arr[insert].isRemoved === false &&
      insert !== choosed.current[0] &&
      (count === 0 || count === 1)
    ) {
      arr[insert].isSelected = true;
      choosed.current.push(insert);
      setCount(count + 1);
      if (count === 1) {
        if (
          arr[choosed.current[0]].id ===
          arr[choosed.current[1]].id
        ) {
          arr[choosed.current[0]].isRemoved = true;
          arr[choosed.current[1]].isRemoved = true;
          choosed.current = [];
          setCount(0);
          return;
        }
        // setCount(100);

        setTimeout(() => {
          arr[choosed.current[0]].isSelected = false;
          arr[choosed.current[1]].isSelected = false;
          choosed.current = [];
          setCount(0);
          return;
        }, 1000);
      }
    }
  }

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

  return (
    <div className="App">
      <div className='contDiv'>
        <p>Find Pairs</p>
        <div className="boxCont">
          {arr.map((box, index) => (
            <Box
              key={uuidv4()}
              S={box.isSelected}
              R={box.isRemoved}
              value={box.id}
              index={index}
              selected={[insert, setInsert]}
            ></Box>
          ))}

        </div>
      </div>

    </div>
  );
}

export default App;