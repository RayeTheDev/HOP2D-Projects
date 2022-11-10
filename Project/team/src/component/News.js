import "./css/news.css";
import { useContext } from "react";
import { ThemeContext } from "../App";

export const News = (props) => {
  const { theme, changeDarkTheme } = useContext(ThemeContext);

  return (
    <div className="nContainer">
      <img className="nHeadImg" src={props.image}></img>
      <div className="nTextMCont">
        <div
          className={
            theme.pallate.dark ? "nTextContainer nTextWhite" : "nTextContainer"
          }
        >
          <div className="nText">{props.text1}</div>
        </div>
        <div className="nTextContainer2">
          <span className={theme.pallate.dark ? "nText2 nTextWhite" : "nText2"}>
            {props.text2}
          </span>
          <span className={theme.pallate.dark ? "nText2 nTextWhite" : "nText2"}>
            {props.text2}
          </span>
        </div>
      </div>
      <div className="nBottomContainer">
        <img className="nBotImg" src={props.image2}></img>
        <span
          className={
            theme.pallate.dark ? "nBottomText nTextWhite" : "nBottomText"
          }
        >
          {props.text3}
        </span>
        <span
          className={
            theme.pallate.dark ? "nBottomText nTextWhite" : "nBottomText"
          }
        >
          {props.text4}
        </span>
        <span
          className={
            theme.pallate.dark ? "nBottomText nTextWhite" : "nBottomText"
          }
        >
          {props.text5}
        </span>
      </div>
    </div>
  );
};
