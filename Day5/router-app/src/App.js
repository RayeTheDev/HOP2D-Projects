import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

const Home = () => {
  return <div>Home</div>;
};

const Users = () => {
  const {params} = useParams()
  return <div> Users:
    <Link to="/user">{params.name}</Link>

  </div>;
};

const User = () => {
  
  return <div>Zolboo</div>;
};

const Market = () => {
  return <div>Market</div>;
};

const Contact = () => {
  return <div>Contact</div>;
};

function App() {
  return (
    <BrowserRouter>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/market">Market</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" > 
          <Route path=":username" element={<User/>}> 
            
          </Route>
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/market" element={<Market />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
