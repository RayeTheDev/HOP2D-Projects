import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { createContext, useState } from "react";
import logo from "./img/logo.svg";
import blackLogo from "./img/team.svg";
import "./component/css/team.module.css";


export const ThemeContext = createContext({});
function App() {
  const [theme, setTheme] = useState({
    pallate: {
      dark: false,
    },
  });

  const changeDarkTheme = () => {
    setTheme({ ...theme, pallate: { dark: !theme.pallate.dark } });
  };

  return (
    <ThemeContext.Provider value={{ theme, changeDarkTheme, data: "string" }}>
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

          <Footer />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
export default App;
