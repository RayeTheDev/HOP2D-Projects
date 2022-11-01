import "../App.css";
import { useState } from "react";

const Od = (props) => {
  console.log(props.num)
  return (
    <>
      <span className={props.num === 1 || 2 || 3 || 4 || 5 ? "fa fa-star checked" : "fa fa-star"} ></span>
      <span className={props.num === 2 || 3 || 4 || 5 ? "fa fa-star checked" : "fa fa-star"}></span>
      <span className={props.num === 3 || 4 || 5 ? "fa fa-star checked" : "fa fa-star"}></span>
      <span className={props.num === 4 || 5 ? "fa fa-star checked" : "fa fa-star"}></span>
      <span className={props.num === 5 ? "fa fa-star checked" : "fa fa-star"}></span>
    </>

  )
}

export const Review = (props) => {
  console.log(props.imgSrc)
  const [stars, setS] = useState([1])
  return (
    <div className="rContainer">
      <div>

        <div className="rStarContainer">

          <Od num={props.star}></Od>

        </div>
        <div className="rTextContainer">
          <p className="rText">
            {props.text}
          </p>
        </div>
      </div>
      <div className="rProfileContainer">
        <img src={props.image} className="rProfileImg" />
        <span className="rProfileName">Amy Klassen</span>
      </div>
    </div>
  );
};
