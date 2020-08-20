import React from "react";
import "./squarecard.css";

const SquareCard = (props) => {
  return (
    <div className="squarecard">
      <img className="image" src={props.picture} />
      <p className="productdetails">
        <div className="productname">{props.name} </div>
        <br />
        This is super comfy great tshirt for summers <br />
        {props.price}
      </p>
    </div>
  );
};

export default SquareCard;
