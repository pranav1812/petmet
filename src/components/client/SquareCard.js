import React from "react";
import Dog from "../pictures/dog.png";
import "./squarecard.css";
import { Card } from "react-bootstrap";
import { BsHeart } from "react-icons/bs";

const SquareCard = (props) => {
  return (
    <div>
      <Card className="outCard">
        <div className="crdImg">
          <Card.Img src={Dog} className="dishImg" />
          <span className="iconspan">
            <BsHeart className="ic" />
          </span>
        </div>
        <div>
          <Card.Title style={{ fontWeight: "bold" }}>
            HUFT Drizzle Buddy Raincoat- Purpule
          </Card.Title>
          <div className="row justify-content-center mb-1"></div>
          <div className="row justify-content-center align-items-center">
            <p className="acprize">Rs. 950</p>
            <p className="cprize ml-4">Rs. 1250</p>
          </div>
          <button
            className="btn btn-block btn-sm"
            style={{
              color: "#ffffff",
              backgroundColor: "#36a9cc",
              borderRadius: "3px",
            }}
          >
            Add to Cart
          </button>
        </div>
      </Card>
    </div>
  );
};

export default SquareCard;
