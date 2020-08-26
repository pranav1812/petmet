import React from "react";
import Arrow from "../pictures/Vector.png";
import "./squarecard.css";

const SquareCard = (props) => {
  return (
    <div>
      <div className="personalthumb">
        <div>
          <img
            style={{ backgroundColor: "#f5f5f5" }}
            className="dishpicture"
            src={props.image}
          />
        </div>
        <p className="dishnames">HUFT Drizzle Chicken Liver Dog Biscuits</p>

        <span>
          <button type="button" className="optionsbutton">
            320 gm
          </button>
          <button type="button" className="optionsbutton">
            800 gm
          </button>
        </span>
        <span>
          <div className="priceofproduct">₹250</div>
          {/* <img className="arrow" src={Arrow} /> */}
        </span>
      </div>
    </div>
  );
};

export default SquareCard;
