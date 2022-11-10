import "./css/review.css";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Od = (props) => {
  const [star1, setStar1] = useState(false);
  const [star2, setStar2] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star4, setStar4] = useState(false);
  const [star5, setStar5] = useState(false);
  
  return (
    <>
      <span
        className={props.num >= 1 ? "fa fa-star checked" : "fa fa-star"}
        onClick={() => (
          setStar1(true),
          setStar5(false),
          setStar4(false),
          setStar3(false),
          setStar2(false)
        )}
      ></span>
      <span
        className={props.num >= 2 ? "fa fa-star checked" : "fa fa-star"}
        onClick={() => (
          setStar2(true),
          setStar1(true),
          setStar5(false),
          setStar4(false),
          setStar3(false)
        )}
      ></span>
      <span
        className={props.num >= 3 ? "fa fa-star checked" : "fa fa-star"}
        onClick={() => (
          setStar3(true),
          setStar2(true),
          setStar1(true),
          setStar5(false),
          setStar4(false)
        )}
      ></span>
      <span
        className={props.num >= 4 ? "fa fa-star checked" : "fa fa-star"}
        onClick={() => (
          setStar4(true),
          setStar3(true),
          setStar2(true),
          setStar1(true),
          setStar5(false)
        )}
      ></span>
      <span
        className={props.num >= 5 ? "fa fa-star checked" : "fa fa-star"}
        onClick={() => (
          setStar5(true),
          setStar4(true),
          setStar3(true),
          setStar2(true),
          setStar1(true)
        )}
      ></span>
    </>
  );
};

export const Review = (props) => {
  const { theme, changeDarkTheme } = useContext(ThemeContext);
  return (
    <div className={theme.pallate.dark ? "rContainer rBorder" : "rContainer"}>
      <div>
        <div className="rStarContainer">
          <Od num={props.star}></Od>
        </div>
        <div className="rTextContainer">
          <p className={theme.pallate.dark ? "rText rWhite" : "rText"}>
            {props.text}
          </p>
        </div>
      </div>
      <div className="rProfileContainer">
        <img src={props.image} className="rProfileImg" />
        <span
          className={
            theme.pallate.dark ? "rProfileName rWhite" : "rProfileName"
          }
        >
          {props.name}
        </span>
      </div>
    </div>
  );
};
