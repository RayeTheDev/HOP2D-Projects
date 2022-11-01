export const News = (props) => {
  return (
    <div className="nContainer">
      <img className="nHeadImg" src={props.image}></img>
      <div className="nTextMCont">
        <div className="nTextContainer">
          <div className="nText">
           {props.text1}
          </div>
        </div>
          <div className="nTextContainer2">
            <span className="nText2">{props.text2}</span>
            <span className="nText2">{props.text2}</span>
          </div>

      </div>
      <div className="nBottomContainer">
        <img className="nBotImg" src={props.image2}></img>
        <span className="nBottomText">{props.text3}</span>
        <span className="nBottomText">{props.text4}</span>
        <span className="nBottomText">{props.text5}</span>
      </div>
    </div>
  );
};
