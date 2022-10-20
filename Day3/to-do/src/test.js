import "./App.css";
import { useState } from "react";

function Task({ task, index, completeTask, removeTask }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
      <button style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>
      <button onClick={() => completeTask(index)}>Complete</button>
    </div>
  );
}

function Todo() {
  const [tasks, setTasks] = useState([
    {
      title: "Go home",
      complated: false
    },
    {
      title: "Go sleep",
      complated: false
    },
    {
      title: "Eat",
      complated: false
    },
  ]);

  const addTask = title => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = index => {
    const newTasks = [...tasks];
    newTasks[index].complated = true;
    setTasks(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  return (
    <div className="todo-container">
      <div className="header">TODO</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            completeTask={completeTask}
            removeTask={removeTask}
            key={index}
          />
        ))}
      </div>
      <div className="create-task" >
        <CreateTask addTask={addTask} />
      </div>
    </div>
  );
}


function CreateTask({ addTask }) {
  const [value, setValue] = useState("");

  return (
    <form onSubmit={(e) => { e.preventDefault(); addTask(value); setValue("") }}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add a new task"
        onChange={sub => setValue(sub.target.value)}
      />
    </form>
  );
}

// const ToDo = (props) => {
//   return (
//     <div className="ad"></div>
//   )
// }

// function App() {
//   const [todos, setTodos] = useState ();
//   const [todo, setTodo] = useState ();

//   const TodoCreate = () => {
//     if(todo) {
//       todos.push(todo);
//     }
//   };

//   return (
//     <div className="App">
//       <div className="row">
//         <input placeholder="todo">
//           <button Onclick={
//             () => console.log("add")
//           }>
//             Add
//           </button>
//         </input>
//       </div>
//     </div>
//   );
// }

export default Todo;