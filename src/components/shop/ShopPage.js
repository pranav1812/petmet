import React, {useState, useEffect} from "react";
import Carousel from "./Carousel";
/*import Rating from "@material-ui/lab/Rating";*/

import "./shoppage.css";
import {db, auth} from '../../firebase'
// import BestSellers from "../dashboardclient/BestSellers";
import {useParams} from 'react-router-dom'

const ShopPage = () => {
  const [info, setInfo]= useState(null)
  const {productId, subComponent}= useParams()
  useEffect(()=>{
    db.collection('items').doc(subComponent).collection('products').doc(productId).get()
      .then(doc=>{
        setInfo(doc.data().details)
      })
  }, [])

  const addToCart=()=>{
    var user= auth.currentUser
    if(user){
      db.collection('user').doc(user.uid).collection('cart').add({
        ...info,
        key: productId
      }).then(()=>alert("Product Added to Cart"))
    }else{
      prompt("Need to login")
    }
    
  }

  const addToWishlist=()=>{
    var user= auth.currentUser
    if(user){
      db.collection('user').doc(user.uid).collection('wishlist').add({
        ...info,
        key: productId
      }).then(()=>alert("Product Added to Wishlist"))
    }else{
      prompt("Need to login")
    }
  }
  
  return (
    <div>
      {info?(
        <div className="carouselanddetails">
        <div>
          <img 
            src={info.url}
            height="200px"
            width="180px"
            alt= {info.name}
          />
        </div>
        <div className="details">
          <p
            className="openedproductname"
            style={{ fontSize: 20, fontWeight: 500, marginBottom: "5px" }}
          >
            {info.name}
          </p>
          <p
            className="openedproductname"
            style={{ fontSize: 19, fontWeight: 500, marginBottom: "10px" }}
          >
            Rs {info.cost}
          </p>
          <hr style={{ color: "rgba(0,0,0,0.1" }} />

          {/*<Rating
            style={{ marginTop: "20px" }}
            name="read-only"
            value={value}
            readOnly
          />*/}
          <p style={{ fontSize: 14, marginTop: "20px" }}>
            {info.description}
            <br /> <div>Product Type: {subComponent} <br />
                  {info.ingriedients}
            </div>
            
          </p>
          <button onClick={addToCart} >Add to Cart</button>
          <button onClick={addToWishlist} >Add to Wishlist</button>
        </div>
      
      <hr style={{ color: "rgba(0,0,0,0.1" }} />
      
      
      </div>
      
      ): <h2>please wait</h2>}
      
    </div>
  );
};
export default ShopPage;
