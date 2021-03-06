import React, {useEffect, useState} from "react";
import Dog from "../pictures/image 15.png";
import "./squarecard.css";
import { Button, Card } from "react-bootstrap";
import { BsHeart } from "react-icons/bs";
import { db, auth } from "../../firebase";
import { Link } from "react-router-dom";

const SquareCard = (props) => {
  var temp = props.size?props.size[0]:null
  const [ userSelectedSize, setUserSelectedSize ] = useState(temp)
  const [ color, setColor] = useState(false);
  const [ cart, setCart] = useState(false)
  useEffect(()=>{  

})
  
const addToWishlist = () => {
  var user = auth.currentUser;
  if (user) {
    db.collection("user")
      .doc(user.uid)
      .collection("wishlist")
      .doc(props._id)
      .set({
        ...props.info,
        key: props._id,
        units: 1,
        userSelectedSize: userSelectedSize,
      })
      .then(() => setColor(true));
  } else {
    prompt("Need to login");
  }
};

  const addToCart = () => {
    var user = auth.currentUser;
    if (user) {
      db.collection("user")
        .doc(user.uid)
        .collection("cart")
        .doc(props._id)
        .set({
          ...props.info,
          key: props._id,
          units: 1,
          userSelectedSize: userSelectedSize
        })
        .then(() => setCart(true));
    } else {
      prompt("Need to login");
    }
  };

  return (
    <div>
      <Card className="outCard">
        <div className="crdImg">
          {props.userSelectedSize?(<div><span>Selected Size:</span>
          <button className="row-btn" > {userSelectedSize} </button></div>):null}
          <Link to={"/ShopPage/" + props.info.category + "/" + props._id}>
          <Card.Img src={props.image} className="dishImg" />
          </Link>
          <span className="iconspan">
            <BsHeart style= {color?{backgroundColor: "red"} : null} onClick={addToWishlist} className="ic" />
          </span>
        </div>
        <div>
          <Card.Title style={{ fontWeight: "bold" }}>
            {props.title}
          </Card.Title>
          <div className="row justify-content-center mb-1">
            {props.size?(props.size.map((s)=>
            <button onClick= {()=>{setUserSelectedSize(s)}} className="row-btn">{s}</button>
            )):null}
            
          </div>
          
    <div className="row justify-content-center align-items-center">
  <p className="acprize">Rs. {props.cost}</p>
  <p className="cprize ml-4">Rs. {props.mrp}</p>
          </div>
          <button
            className="btn btn-block btn-sm"
            onClick = {addToCart}
            style={{
              color: "#ffffff",
              backgroundColor: "#36a9cc",
              borderRadius: "3px",
            }}
          >
            {cart? "Added to cart": "Add to Cart"}
          </button>
        </div>
      </Card>
    </div>
  );
};

export default SquareCard;
