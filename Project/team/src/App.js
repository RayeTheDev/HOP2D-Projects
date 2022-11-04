import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { Review, News, Team, Header, Products, Services } from "./component";
import rProfileImg from "./img/Ellipse.svg";
import nHeadImg from "./img/Head.svg";
import logo from "./img/logo.svg";
import blackLogo from "./img/team.svg";
import "./component/css/team.module.css";

function App() {
  return (

    <BrowserRouter>
      <Header image={logo} image2={blackLogo} />
      <Routes>
        <Route path="/" element={<Team />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/services" element={<Services />}></Route>
        {/* <Route path="./contact" element={<Contact />}></Route>
        <Route path="./login" element={<LogIn />}></Route>
        <Route path="./getaccess" element={<GetAccess />}></Route> */}
      </Routes>
      {/* <Review star={5}
        text=" Give everyone you work with—inside and outside your emoji, keep
        conversations focused in channels, and simplify all your communication
        into one place."
        image={rProfileImg}
      />
      <News
        text1="  Data-Driven Design is Killing Our Instincts"
        text2="Our latest updates and blogs about managing your team"
        text3="Jane Cooper"
        text4="|"
        text5="2nd January, 2022"
        image={nHeadImg}
        image2={rProfileImg}

      /> */}
    </BrowserRouter>
  );
}
export default App;
