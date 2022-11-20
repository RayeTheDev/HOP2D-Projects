import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {
  Review,
  News,
  Team,
  Header,
  Products,
  Services,
  Contact,
  Login,
  GetAccess,
  Blogs,
  Footer
} from "./component";
import { createContext, useState, useEffect } from "react";
import logo from "./img/logo.svg";
import blackLogo from "./img/team.svg";
import axios from "axios";
import "./component/css/team.module.css";


export const ThemeContext = createContext({});
function App() {

  //Header contexts
  const [css, setCss] = useState(false);
  const [bg, setBg] = useState(false);
  function setFix() {
    if (window.scrollY <= 0) {
      setBg(false);
    } else {
      setBg(true);
    }
  }


  //HomePage contexts
  const baseUrl = 'https://dummyapi.io/data/v1/';
  const [data, setData] = useState(null)
  const [pos, setPos] = useState(0);

  const goRight = (index) => {
    console.log(pos);
    console.log(data.length)
    if (pos <= data.length + 26) {
      setPos((prev) => prev + 3);
    }
  };
  const goLeft = () => {
    if (pos >= 0) {
      setPos((prev) => prev - 3);
    }

  };

  useEffect(() => {
    axios.get(baseUrl + 'comment', {
      headers: {
        "app-id": " 636f2fc4e8d0ff392b3fc559",
      }
    })
      .then((res) => {
        setData(res.data.data)
        console.log(res.data.data, 'homepage')
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  //BlogPage Contexts
  const [bdata, setbData] = useState(null);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(9);
  const [first, setFirst] = useState(false)

  const nextPage = () => {
    setbData(null);
    setFirst(false)
    setPage((prev) => prev + 1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (page === 0) {
      setFirst(true)
    }
  }, [page])

  const prevPage = () => {
    if (page <= 0) {
      setFirst(true)

    } else {
      setFirst(false)
      setbData(null);
      window.scrollTo(0, 0);
      setPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    axios
      .get(baseUrl + `post?limit=${limit}&page=${page}`, {
        headers: {
          "app-id": " 636f2fc4e8d0ff392b3fc559",
        },
      })
      .then((res) => {
        console.log(res.data, 'blog');
        setbData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, limit]);



  //Global contexts
  const [theme, setTheme] = useState({
    pallate: {
      dark: false,
    },
  });

  const changeDarkTheme = () => {
    setTheme({ ...theme, pallate: { dark: !theme.pallate.dark } });
  };

  return (
    <ThemeContext.Provider value={{
      theme, changeDarkTheme, goRight, goLeft, data,
      pos, bdata, first, nextPage, prevPage, css, setCss, bg, setFix
    }}>
      <BrowserRouter>
        <div className="App">
          <Header image={logo} image2={blackLogo} />
          <Routes>
            <Route path="/" element={<Team />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/getaccess" element={<GetAccess />}></Route>
          </Routes>
          <Footer img={logo} />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
export default App;
