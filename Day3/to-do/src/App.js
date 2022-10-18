import logo from "./logo.svg";
import React, { useState , useRef} from "react";
import "./App.css";

const ToDo = (props) => {
  return (
    <div className="Container">
      <input type="checkbox" value={props.text} />
      <div style={{textDecoration: task.Completed ? 'line-through':""}} className="toDo ">{props.text}</div>
    </div>
  );
};


function App() {
  const ref = useRef(null);
  const inputEl = document.getElementById("input");
  const [tasks, setTasks] = useState([]);

  const add = () => {
    const newTask = { text: ref.current.value, isCompleted: false };
    setTasks([...tasks, newTask]);
    ref.current.value = ''
    
  };

 
  return (
    <div className="App">
      {/* <Write /> */}
      <input ref={ref} id="input" type="text" placeholder="Enter new task" />
      <button onClick={add}>Add</button>
      {tasks.map((task, index) => (
        <ToDo
          text={task.text}
          key={task.text + index}
          isCompleted={task.isCompleted}
        />
      ))}
    </div>
  );
}

export default App;
