import "../App.css";
import { useState } from "react";

const Od = () => {
    return (
        <span class="fa fa-star"></span>
    )
        
    
}
export const Review = (props) => {
  let str;
  let stars = new Array(4)
  return (
    <div className="rContainer">
      <div className="rStarContainer">
        {stars.map(() => {
            <Od></Od>
        })}
      </div>
      <div className="rTextContainer">
        <p className="rText">
         {props.text}
        </p>
      </div>
    </div>
  );
};
