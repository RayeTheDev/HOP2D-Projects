import "./css/news.css";
import { useContext } from "react";
import { ThemeContext } from "../App";

export const News = (props) => {
  const { image, text, owner, publishDate } = props;
  const { theme, changeDarkTheme } = useContext(ThemeContext);

  return (
    <div className="nContainer">
      <img className="nHeadImg" src={image}></img>
      <div className="nTextMCont">
        <div
          className={
            theme.pallate.dark ? "nTextContainer nTextWhite" : "nTextContainer"
          }
        >
          <div className="nText">{text}</div>
        </div>
        <div className="nTextContainer2">
          <span
            className={theme.pallate.dark ? "nText2 nTextWhite" : "nText2"}
          >fnidusfbosudhfoudshfsdfhdsouf</span>
          <span
            className={theme.pallate.dark ? "nText2 nTextWhite" : "nText2"}
          >fiudsgfidsfvdsiyfbdisfbdis</span>
        </div>
      </div>
      <div className="nBottomContainer">
        <img className="nBotImg" src={owner.picture}></img>
        <span
          className={
            theme.pallate.dark ? "nBottomText nTextWhite" : "nBottomText"
          }
        >
          {owner.firstName + " " + owner.lastName}
        </span>
        <span
          className={
            theme.pallate.dark ? "nBottomText nTextWhite" : "nBottomText"
          }
        >
          |
        </span>
        <span
          className={
            theme.pallate.dark ? "nBottomText nTextWhite" : "nBottomText"
          }
        >
          {publishDate}
        </span>
      </div>
    </div>
  );
};
