import "./App.css";
import { Review, News } from "./component";
import rProfileImg from "./img/Ellipse.svg";
import nHeadImg from "./img/Head.svg";
import "./component/css/review.css"
import "./component/css/news.css"


function App() {
  return (
    <div className="Container">
      <Review star={5}
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
      />
    </div>
  );
}
export default App;
