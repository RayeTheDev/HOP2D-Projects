import "./css/review.module.css"
import { useState } from "react";
import { FiStar } from "react-icons/fi";

const Od = (props) => {
  const [star1, setStar1] = useState(false);
  const [star2, setStar2] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star4, setStar4] = useState(false);
  const [star5, setStar5] = useState(false);
  console.log(props.num);
  return (
    <>
      <span
        className={star1 === true ? "fa fa-star checked" : "fa fa-star"}
        onClick={() => (
          setStar1(true),
          setStar5(false),
          setStar4(false),
          setStar3(false),
          setStar2(false)
        )}
      ></span>
      <span
        className={star2 === true ? "fa fa-star checked" : "fa fa-star"}
        onClick={() => (
          setStar2(true),
          setStar1(true),
          setStar5(false),
          setStar4(false),
          setStar3(false)
        )}
      ></span>
      <span
        className={star3 === true ? "fa fa-star checked" : "fa fa-star"}
        onClick={() => (
          setStar3(true),
          setStar2(true),
          setStar1(true),
          setStar5(false),
          setStar4(false)
        )}
      ></span>
      <span
        className={star4 === true ? "fa fa-star checked" : "fa fa-star"}
        onClick={() => (
          setStar4(true),
          setStar3(true),
          setStar2(true),
          setStar1(true),
          setStar5(false)
        )}
      ></span>
      <span
        className={star5 === true ? "fa fa-star checked" : "fa fa-star"}
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
  return (
    <div className="rContainer">
      <div>
        <div className="rStarContainer">
          <Od num={props.star}></Od>
        </div>
        <div className="rTextContainer">
          <p className="rText">{props.text}</p>
        </div>
      </div>
      <div className="rProfileContainer">
        <img src={props.image} className="rProfileImg" />
        <span className="rProfileName">Amy Klassen</span>
      </div>
    </div>
  );
};
