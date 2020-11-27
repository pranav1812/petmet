import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import "./cart.css";
import axios from "axios";
import paymentRazorpay from "./payment";
import Food from "../pictures/image 360.png";
import Cart2 from "./Cart2";

const login =
  window.location.protocol + "//" + window.location.host + "/" + "login/";

const CartComponent = () => {
  const [wish, setWish] = useState(null);
  const [total, setTotal] = useState(0);
  const [code, setCode] = useState("no_promo");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [inTotal, setInTotal] = useState(0);
  const [user, setUser] = useState(null);
  const [useWallet, setUseWallet] = useState(false);

  const [promo, setPromo] = useState({
    description: "default promo code, 5% cashback to wallet+0 discount",
    discount: "0",
    discountLowerLimit: "0",
    discountUpperLimit: "0",
    reUsable: true,
    walletCashback: ".05",
    walletCashbackMaxima: "150",
  });

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

  const retrieveOrder = async () => {
    var endPoint = "https://petmet.co.in/payment/order";

    var products = [];
    wish.forEach((pro) => {
      products.push({
        category: pro.category,
        productId: pro.key,
        units: pro.units,
      });
    });

    var reqBody = {
      uid: "x9NJedXFbnOny29oq65urIxC4Kk1",
      useWallet: useWallet,
      promo: code,
      mail: user.mail || user.email,
      products: products,
    };

    try {
      var response = await axios.post(endPoint, reqBody);
      console.log(response);
      paymentRazorpay(response);
    } catch (err) {
      console.error(err);
    }
  };

  const delPro = (key) => {
    db.collection("user")
      .doc(uid)
      .collection("cart")
      .doc(key)
      .delete()
      .then(() => {
        console.log("deleted");
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
              temp.push({ ...doc.data() });
              if (doc.data().cost) {
                net += Number(doc.data().cost) * doc.data().units;
              }
            });
            setWish(temp);
            setTotal(net);
            setInTotal(net);
            discount(promo);
          });

        db.collection("user")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) setUser(doc.data());
          });
      }
    });
  }, []);

  const changeQuant = (ind, cost, i) => {
    if (wish[ind].units > 1) {
      var temp = wish;
      var net = total;
      temp[ind].units += i;
      net += i * cost;
      setWish(temp);
      setTotal(net);
      setInTotal(net);
    } else if (wish[ind].units == 1) {
      if (i == -1) {
        delPro(wish[ind].key);
        wish.splice(ind, 1);
      }
      var temp = wish;
      var net = total;
      temp[ind].units += i;
      net += i * cost;
      setWish(temp);
      setTotal(net);
      setInTotal(net);
    }
  };

  const loadPromo = (code) => {
    db.collection("promo")
      .doc(code)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setPromo(doc.data());
          discount(doc.data());
        }
      });
  };

  const discount = (promo) => {
    var net = inTotal;
    if (net > Number(promo.discountLowerLimit)) {
      var inDis = Number(promo.discount) * net;
      net -= Math.min(inDis, Number(promo.discountUpperLimit));
      setTotal(net);
      setCouponDiscount(Math.min(inDis, Number(promo.discountUpperLimit)));
    }
  };

  return (
    <div style={{ backgroundColor: "#e5e5e5" }}>
      <p
        style={{
          textAlign: "center",
          marginTop: " 90px",
        }}
      >
        <span style={{ color: "#36A9CC" }}>
          CART ---------------------------
        </span>
        <span style={{ color: "#FF5352" }}>
          ADDRESS ---------------------------
        </span>
        <span style={{ color: "#FF5352" }}>PAYMENT</span>
      </p>
      <div style={{ marginTop: "-30px" }} className="bothflexbox">
        <div className="flexbox11">
          {/* .................... */}
          {wish
            ? wish.map((wi, ind) => (
                <div className="cartproductcard">
                  <div className="embedded_cartproductcard">
                    <img src={wi.url} alt="khaana" />
                    <div className="columnembeddedcard">
                      <p className="amount">{wi.name}</p>

                      <p style={{ marginTop: "6.3px" }} className="self">
                        Size: {wi.size}
                      </p>

                      <span style={{ marginTop: "47px" }}>
                        <button
                          style={{
                            background: "#FFFFFF",
                            border: " 1px solid #C4C4C4",
                            boxSizing: "border-box",
                            borderRadius: "2px 0px 0px 2px",
                          }}
                          className="cart_decreasebutton"
                          onClick={() => {
                            changeQuant(ind, Number(wi.cost), -1);
                          }}
                        >
                          -
                        </button>
                        <button
                          style={{
                            background: " #EBFAFF",
                            border: "1px solid #C4C4C4",
                            boxSizing: "border-box",
                          }}
                        >
                          {wi.units}
                        </button>
                        <button
                          style={{
                            background: "#FFFFFF",
                            border: " 1px solid #C4C4C4",
                            boxSizing: "border-box",
                            borderRadius: "2px 0px 0px 2px",
                          }}
                          className="cart_decreasebutton"
                          onClick={() => {
                            changeQuant(ind, Number(wi.cost), 1);
                          }}
                        >
                          +
                        </button>
                      </span>
                    </div>
                    <div className="embeddedflexforprices">
                      <p style={{ fontWeight: "500" }} className="self2 amount">
                        ₹{wi.cost}
                      </p>
                      <p className="self2 "></p>
                    </div>
                  </div>
                </div>

                // ......................................productcardends....................
              ))
            : null}
        </div>

        {/* .............................. */}
        <div className="flexbox22">
          <div className="coupons">
            <p className="headingofflex2">COUPONS</p>
            <hr />
            <br />

            <div className="label_price_flex">
              <div className="amount applycouponstext">
                <input
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                />
              </div>
              <div className="price_part amount">
                <button
                  type="button"
                  className="applybuttonn"
                  onClick={() => {
                    loadPromo(code);
                  }}
                >
                  APPLY
                </button>
              </div>
            </div>
          </div>
          {/* ...................................... */}

          {/* ......................................................... */}
          <div className="pricedetails">
            <p className="headingofflex2">PRICE DETAILS (3 ITEMS)</p>
            <br />
            <hr />
            <div className="label_price_flex">
              <div className="amount">Total MRP</div>
              <div className="price_part amount">₹{inTotal} </div>
            </div>
            <div className="label_price_flex">
              <div className="amount">Discount on MRP</div>
              <div className="price_part amount">-₹435 </div>
            </div>
            <div className="label_price_flex">
              <div className="amount">Coupon Discount</div>
              <div className="price_part amount">-₹{couponDiscount} </div>
            </div>
            <hr style={{ color: "black" }} />
            <div className="label_price_flex">
              <div style={{ fontWeight: "500" }} className="amount">
                Total Amount
              </div>
              <div style={{ fontWeight: "500" }} className="price_part amount">
                ₹{total}
              </div>
            </div>
          </div>

          <button
            type="button"
            class="placeorderbutton"
            onClick={retrieveOrder}
          >
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
        window.location = login;
      } else {
        setUsr(user);
      }
    });
  });
  return <div>{usr ? <CartComponent /> : null}</div>;
}
