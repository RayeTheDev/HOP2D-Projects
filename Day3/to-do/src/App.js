import React, { useState, useRef } from "react";
import "./App.css";
import { RiCloseCircleLine } from "react-icons/ri";
import { MdOutlineVerified } from "react-icons/md";

const ToDo = ({ task, index, complete, remove }) => {
  return (
    <div className={task.isCompleted ? "Container toDoCompleted" : "Container"}>
      <div className="toDo">{task.text}</div>
      <div className="icons">
        <MdOutlineVerified onClick={() => complete(index)} />
        <RiCloseCircleLine onClick={() => remove(index)} />
      </div>
    </div>
  );
};


function App() {
  const ref = useRef(null);
  const [tasks, setTasks] = useState([]);

  const add = () => {
    const newTask = { text: ref.current.value, isCompleted: false };
    setTasks([...tasks, newTask]);
    ref.current.value = "";

  };

  const complete = (index) => {
    console.log(index)
    const newTask = [...tasks];
    newTask[index].isCompleted = !newTask[index].isCompleted;
    setTasks(newTask);

  };

  const remove = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };
  
  // document.addEventListener("keydown", (e) => {
  //   if(e.key == "Enter") {
  //     add()
  //   }
  // })
  return (
    <div className="App">
      <div className="boxCont">
        <h1>To Do List</h1>
        <div className="addSector">
          <input
            className="input"
            ref={ref}
            type="text"
            placeholder="Enter new task"
          />
          <button className="addButton" onClick={add}>
            Add
          </button>
        </div>

        {tasks.map((task, index) => {
         return (!task.isCompleted &&

           <ToDo
             text={task.text}
             task={task}
             index={index}
             key={task.text + index}
             isCompleted={task.isCompleted}
             complete={complete}
             remove={remove}
           />
         )
          
        })}

        <h1>Completed</h1>
         {tasks.map((task, index) => {
              return(task.isCompleted &&
                <ToDo
                text={task.text}
                task={task}
                index={index}
                key={task.text + index}
                isCompleted={task.isCompleted}
                complete={complete} 
                remove={remove}/>
              )
         })}
        {/* </div> */}
      </div>
    </div>
  );
  
}

export default App;
