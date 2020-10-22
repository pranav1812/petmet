import React from "react";
import Arrow from "../pictures/Vector.png";
import "./squarecard.css";
import {Button} from 'react-bootstrap';

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
        <div className="priceofproduct">₹250</div>
        <Button className="btn btn-block mt-4 m-2">Add to Cart</Button>
      </div>
    </div>
  );
};

export default SquareCard;
