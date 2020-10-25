import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import product1 from "../pictures/image 37.png";
import product2 from "../pictures/image 35.png";
import product3 from "../pictures/image 34.png";
import "./wishlist.css";
import "./cart.css";
import  Rectangle115 from "../pictures/Rectangle 115";
import  Rectangle116 from "../pictures/Rectangle 116";
import  Rectangle117 from "../pictures/Rectangle 117";
import  Rectangle118 from "../pictures/Rectangle 118";
import  Rectangle119 from "../pictures/Rectangle 119";
import  Rectangle120 from "../pictures/Rectangle 120";
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
<div  style={{marginTop:"50px"}} className="wishlistpage">
      
{wish? wish.map(wi=> (
<div style={{ margin: "10px", width: "40em" }} className="cartproductcard">
       
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
alt="productpicture"/>

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
 
<span> <img src=""></img> </span> 
 <p>
<span style={{
    width: "77.44px",
    height: "27.69px",
    left: "71.1px",
    top: "525.16px",
    fontFamily: "Roboto",
fontStyle: "normal",
fontWeight: "500",
fontSize: "28px",
lineHeight: "33px",
color: "#FF5352",
}}>{"Rs. " + wi.cost}
</span>
   <span>  </span>   
<span style={{
 /*position: "absolute",
 width: "75.99px",
 height: "18.69px",
 left: "155.37px",
 top: "532.16px",*/
fontStyle: "normal",
fontWeight: "500",
fontSize: "20px",
lineHeight: "23px",
color: "#B5B5B5",
textDecorationLine:"line-through",
}}>{"Rs. " + wi.cost}</span>

</p>
  </div>
        </p>
        
       <br />
        <button type="button" id="buttondd" class="btn btnapply" onClick={()=>{delPro(wi.key)}}>
          Add to cart
        </button>
        <button type="button" id="buttonbuy" class="btn btnapply" onClick={()=>{proLink(wi._id,wi.category)}}>
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
  return <div>
     <h1>MY WISHLIST</h1>
    {usr ? <WishlistComponent /> : null}</div>;
}
