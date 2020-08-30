import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import "./cart.css";
import product1 from "../pictures/image 37.png";
import product2 from "../pictures/image 35.png";
import product3 from "../pictures/image 34.png";

const home= window.location.protocol + "//" + window.location.host + "/" +'Home/'

const CartComponent = () => {

  const [wish, setWish]= useState(null)
  const [total, setTotal]= useState(null)
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      console.log(user)
      db.collection('user').doc(user.uid).collection('cart').get()
        .then(docs=>{
          var temp=[]
          var net=0
          docs.forEach((doc)=>{
            temp.push(doc.data())
            if(doc.data().cost){
              net+= Number(doc.data().cost)
            }
          })
          setWish(temp)
          setTotal(net)
        })
    })
    
  }, [])

  return (
    <div>
      <div className="bothflexbox">
        <div className="flexbox1">

          <div className="heading">
            <h6 style={{ fontWeight: "bold" }}>
              MY SHOPPING BAG ( 1 ITEM)
              <br /> <div style={{ color: "#FF5352" }}>TOTAL: {"Rs. "+ total? total*1.3>299? 0+total*1.3 : 150+total*1.3: 0} </div>
            </h6>
          </div>
          {/* .................... */}
          {wish? wish.map(wi=> (
        <div style={{ margin: "10px", width: "40em" }} className="cartproductcard">
        
        <p>
          <img           
            height= "200px"
            width= "150px"
            style={{marginRight: "1em"}}
            className="cartproductimage"
            src={wi.url || product1}
            alt="productpicture"
          
          />
          <div style={{ marginLeft: "140px", color: "black" }}>
            <h4 style={{ fontWeight: "500" }}>{wi.name} </h4>
            <p>{wi.description} </p>
            <p>{"Rs. " + wi.cost} </p>
          </div>
        </p>
        
       <br />
        <button type="button" class="btn btnapply">
          Remove
        </button>
        <button type="button" class="btn btnapply">
          Buy Now
        </button>
      </div>
      ) ): null}
      </div>    
        
        {/* .............................. */}
        <div className="flexbox2">
          <hr />
          <div className="coupons">
            <h6 className="availableoffers">Apply coupons</h6>
            <button type="button" class="btn btnapply">
              APPLY
            </button>
            <hr />
          </div>
          {/* ...................................... */}
          <div className="pricedetails">
            <h6 className="availableoffers">PRICE DETAILS</h6>
            <ul>
              <span>
                <li>
                  <p>Bag Total {"Rs."+ total? total: 0} </p>
                </li>
              </span>
              
              <li>
                <p> GST= {"Rs."+ total? total*0.3: 0} </p>
              </li>
              <li>
                <p> Delivery Charge {"Rs" + total? total*1.3>299? 0: 150 : 0} </p>
              </li>
              <hr />
              <li>
                <p> TOTAL {"Rs" + total? total*1.3>299? 0+total*1.3 : 150+total*1.3: 0}</p>
              </li>
            </ul>
            <button
              type="button"
              style={{ backgroundColor: "#36A9CC" }}
              class="btn btn-secondary"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
        {/* ................................... */}
      </div>
    </div>
  );
};

export default function Cart() {
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
  return <div>{usr ? <CartComponent /> : null}</div>;
}
