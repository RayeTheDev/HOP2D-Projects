// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";

const data = [
  { name: "Turuu", number: "99033561" },
  { name: "Erdem", number: "99998811" },
  { name: "Bobo", number: "98763890" },
  { name: "Bayraa", number: "90876321" },
  { name: "Munkh-tsog", number: "93365412" },
  { name: "Zolboo", number: "91362412" },
  { name: "Naraa", number: "99854312" },
];

const Contact = (props) => {
  const [number, setNumber] = useState(1);

  const add = () => {
    setNumber(number + 1);
  };
  return (
    <div className="contact">
      <h1>{props.name}</h1>
      <p>{props.number}</p>
      <p>Absence : {number}</p>
      <button onClick={add}>Click</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
      ds
      </header>
=======
      {data.map((item, index) => {
        return (
          <Contact
            key={item.name + index}
            name={item.name}
            number={item.number}
          />
        );
      })}
>>>>>>> bc028e7c6c6daf9e33aa5e91e7010a8192b5bd9d
    </div>
  );
}

export default App;
