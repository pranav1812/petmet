import React from "react";
import "./roundcard.css";


export default function RoundCard(props) {

  return (
    <div className="roundcardfile">
      <img className="media" src={props.image} />
      <p className="mt-2" style={{color: "#000000"}}>{props.title}</p>
    </div>
  );
}
