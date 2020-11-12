import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import "./cart.css";
import Food from "../pictures/image 360.png";

const home =
  window.location.protocol + "//" + window.location.host + "/" + "Home/";

const CartComponent = () => {
  const [wish, setWish] = useState(null);
  const [total, setTotal] = useState(null);
  const [uid, setUid] = useState(null);
  const proLink = (_id, category) => {
    window.location =
      window.location.protocol +
      "//" +
      window.location.host +
      "/" +
      "ShopPage" +
      "/" +
      category +
      "/" +
      _id;
  };

  const [num, setNum] = useState(0);

  const decrease = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      setNum(0);
    }
  };

  const increase = () => {
    setNum(num + 1);
  };

  const delPro = (key) => {
    db.collection("user")
      .doc(uid)
      .collection("cart")
      .doc(key)
      .delete()
      .then(() => {
        window.location.reload();
      });
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setUid(user.uid);
        console.log(uid);
        db.collection("user")
          .doc(user.uid)
          .collection("cart")
          .get()
          .then((docs) => {
            var temp = [];
            var net = 0;
            docs.forEach((doc) => {
              temp.push({ ...doc.data(), key: doc.id, _id: doc.data().key });
              if (doc.data().cost) {
                net += Number(doc.data().cost);
              }
            });
            setWish(temp);
            setTotal(net);
          });
      }
    });
  }, []);

  return (
    <div style={{backgroundColor:"#e5e5e5"}}>
      <div style={{marginTop:"-50px"}} className="bothflexbox">
        <div className="flexbox1">
          {/* <div className="heading">
            <h6 style={{ fontWeight: "bold" }}>
              MY SHOPPING BAG ( 1 ITEM)
              <br />{" "}
              <div style={{ color: "#FF5352" }}>
                TOTAL:{" "}
                {"Rs. " + total
                  ? total * 1.3 > 299
                    ? 0 + total * 1.3
                    : 150 + total * 1.3
                  : 0}{" "}
              </div>
            </h6>
          </div> */}
          {/* .................... */}
          {wish
            ? wish.map((wi) => (
                <div className="cartproductcard">
                  <img src={Food} alt="" />

                  <span>
                    <p>HUFT Drizzle Buddy Dog Biscuits</p>
                    <p>Size: Large</p>
                    {/* <span>
                      <span>
                        <button onClick={increase}>+</button>
                      </span>

                      <span>
                        <p>{num}</p>
                      </span>
                      <span>
                        <button onClick={decrease}>-</button>
                      </span>
                    </span> */}
                    <br />

                    <hr />
                    <span>
                      <button className="cartremove"> REMOVE</button>
                      <button className="cartremove">ADD TO WISHLIST</button>
                    </span>
                  </span>
                </div>

                /* <p>
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
        <button type="button" class="btn btnapply" onClick={()=>{delPro(wi.key)}}>
          Remove
        </button>
        <button type="button" class="btn btnapply" onClick={()=>{proLink(wi._id,wi.category)}}>
          View Product
        </button> */

                // ......................................productcardends....................
              ))
            : null}
        </div>

        {/* .............................. */}
        <div className="flexbox2">
          <hr />
          <div className="coupons">
            <p>COUPONS</p>
            <hr />
            <br />
            <p>
              <span className="availableoffers">Apply coupons</span>

              <button type="button" class="applybutton">
                APPLY
              </button>
            </p>
          </div>
          {/* ...................................... */}
          <div className="pricedetails">
            <hr />
            <ul>
              <li>
                <p>
                  <span className="pricecategory">Total MRP</span>{" "}
                  {"Rs." + total ? total : 0}{" "}
                </p>
              </li>

              {/* <li>
                <p> GST= {"Rs." + total ? total * 0.3 : 0} </p>
              </li>
              <li>
                <p>
                  {" "}
                  Delivery Charge{" "}
                  {"Rs" + total ? (total * 1.3 > 299 ? 0 : 150) : 0}{" "}
                </p>
              </li>
              <hr /> */}
              <hr />
              <li>
                <p>
                  <span className="pricecategorytotal">Total Amount</span>
                  <span>
                    {"₹" + total
                      ? total * 1.3 > 299
                        ? 0 + total * 1.3
                        : 150 + total * 1.3
                      : 0}
                  </span>
                </p>
              </li>
            </ul>
          </div>
          <button type="button" class="placeorderbutton">
            PLACE ORDER
          </button>
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
