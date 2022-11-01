import "./App.css";
import { Review, News } from "./component";
import rProfileImg from "./img/Ellipse.svg";
import nHeadImg from "./img/Image.svg";

function App() {
  return (
    <div className="Container">
      <Review star={1}
        text=" Give everyone you work with—inside and outside your emoji, keep
        conversations focused in channels, and simplify all your communication
        into one place."
        image={rProfileImg}
      />
      <News
        text=" Give everyone you work with—inside and outside your emoji, keep
        conversations focused in channels, and simplify all your communication
        into one place."
        image={nHeadImg}
      />
    </div>
  );
}
export default App;
