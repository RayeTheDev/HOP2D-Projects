import { NavBar, Home, Songs, Search } from "./components";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ThemeContext = createContext({})

function App() {

  const [create, setCreate] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/users/3/playlists`
      );
      console.log(response.data);
      setData(response.data);
    })();
  }, []);

  return (
    <ThemeContext.Provider value={{ create, setCreate }}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/songs" element={<Songs title={data.listName} />}></Route>
            <Route path="/search" element={<Search />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
