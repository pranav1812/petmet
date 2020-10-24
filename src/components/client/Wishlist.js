import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import product1 from "../pictures/image 37.png";
import product2 from "../pictures/image 35.png";
import product3 from "../pictures/image 34.png";
// import "./wishlist.css";
import "./cart.css";

const home= window.location.protocol + "//" + window.location.host + "/" +'Home/'


const WishlistComponent = () => {

  const [wish, setWish]= useState(null)
  const [uid, setUid] = useState(null)
  const proLink = (_id,category) => {
    window.location = window.location.protocol + "//" + window.location.host + "/" + "ShopPage" + "/" + category + "/" + _id
  }
  const delPro = (key) => {
    db.collection('user').doc(uid).collection('wishlist').doc(key).delete()
    .then(()=>{
      window.location.reload()
    })
  }
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
     if(user){
       console.log(user)
      setUid(user.uid)
      db.collection('user').doc(user.uid).collection('wishlist').get()
        .then(docs=>{
          var temp=[]
          docs.forEach((doc)=>{
            temp.push({...doc.data(),key: doc.id,_id: doc.data().key})
          })
          setWish(temp)
        })
      }
    
     })
  }, [])

  return (
    <div className="wishlistpage">
      
      {wish? wish.map(wi=> (
        <div style={{ margin: "10px", width: "40em" }} className="cartproductcard">
        <h1>MY WISHLIST</h1>
        <p>
          <img
            position= "absolute"
            width= "146.59px"
            height= "195.13px"
            left= "71.1px"
            top= "289.84px"
            style={{marginRight: "1em"}}
            className="cartproductimage"
            src={wi.url || product1}
            alt="productpicture"
          />
          <div style={{ marginLeft: "140px", color: "black" }}>
            <h4 style={{ fontfamily: "Roboto", fontstyle: "normal", fontweight: "500",fontsize: "22px",
lineheight: "26px",
textalign: "center", color: "#2B3B47"
 }}>{wi.name} </h4>
            <p style={{fontfamily: "Roboto",fontstyle: "normal",fontweight: "normal",
fontsize: "18px",
lineheight: "21px",
color: "#000000"
}}>{wi.description} </p>
            <p style={{fontfamily: "Roboto",
fontstyle: "normal",
fontweight: "500",
fontsize: "28px",
lineheight: "33px",
color: "#FF5352",
}}>{"Rs. " + wi.cost} </p>
          </div>
        </p>
        
       <br />
        <button type="button" style={{backgroundcolor: "#008CBA"}} class="btn btnapply" onClick={()=>{delPro(wi.key)}}>
          Add to cart
        </button>
        <button type="button" class="btn btnapply" onClick={()=>{proLink(wi._id,wi.category)}}>
          Buy Now
        </button>
      </div>
      )): null}  
    </div>
  )
}

export default function Wishlist() {
  const [usr, setUsr] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        alert("login required");
        window.location = home;
      } else {
        setUsr(user);
      }
    });
  });
  return <div>{usr ? <WishlistComponent /> : null}</div>;
}
