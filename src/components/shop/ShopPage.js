import React, { useState, useEffect } from "react";

/*import Rating from "@material-ui/lab/Rating";*/
import "../Admin/Admin.css";
import "./shoppage.css";
import { db, auth } from "../../firebase";
import "../client/newProductDeatils.css";
import Productdescription from "../pictures/image 35.png";
// import BestSellers from "../dashboardclient/BestSellers";
import { useParams } from "react-router-dom";
import emailjs from "emailjs-com";
import { emailConfig } from "../../sendMail";
import { init } from "emailjs-com";
init(emailConfig.userId);

const ShopPage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [paymentMode, setPaymentMode] = useState(null);
  const [newDeliveryAddress, setNewDeliveryAddress] = useState(null);
  const [show, setShow] = useState(false);
  const [showw, setShoww] = useState(false);
  const [info, setInfo] = useState(null);
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(null);
  const [uid, setUid] = useState(null);
  const { productId, subComponent } = useParams();
  const [confirmShow, setConfirmShow] = useState(false);


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
  const [showreadmore, setShowreadmore] = useState(false);
  const showfunction = () => {
    if (showreadmore == false) {
      setShowreadmore(true);
    } else {
      setShowreadmore(false);
    }
  };
  const Box = () => {
    return (
      <p>
        biscuits makes treat time both nutritious and delicious. loaded with
        rich flavours from farm-fresh chicken and other high-quality human-grade
        ingredients
      </p>
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUid(user.uid);
        db.collection("user")
          .doc(user.uid)
          .get()
          .then((doc) => {
            setUserInfo(doc.data());
          });
      }
    });
    db.collection("items")
      .doc(subComponent)
      .collection("products")
      .doc(productId)
      .get()
      .then((doc) => {
        if(doc.exists)
          setInfo(doc.data().details);
        else{
          alert('Product not found, sorry for inconvenience')
          window.history.back()
        }
      });
  }, [qty]);

  const handleClose1 = () => setShow(false);
  const handleShow1 = () => setShow(true);

  const handleClose2 = () => {
    setShoww(false);
    setConfirmShow(true);
  };
  const handleShow2 = () => {
    setShow(false);
    setShoww(true);
  };

  /* send email function */

  const sendEmail = (obj) => {
    emailjs
      .send(emailConfig.serviceId, emailConfig.confirmOrderTemplate, obj)
      .then((res) => {
        console.log("SUCCESS!", res.status, res.text);
      })
      .catch((err) => console.log("FAILED...", err));
  };

  /* send email function */

  const addToCart = () => {
    var user = auth.currentUser;
    if (user) {
      db.collection("user")
        .doc(user.uid)
        .collection("cart")
        .doc(productId)
        .set({
          ...info,
          key: productId,
          units: 1
        })
        .then(() => alert("Product Added to Cart"));
    } else {
      prompt("Need to login");
    }
  };

  const addToWishlist = () => {
    var user = auth.currentUser;
    if (user) {
      db.collection("user")
        .doc(user.uid)
        .collection("wishlist")
        .doc(productId)
        .set({
          ...info,
          key: productId,
          units: 1
        })
        .then(() => alert("Product Added to Wishlist"));
    } else {
      prompt("Need to login");
    }
  };


  const confirmOrder = () => {
    setTotalPrice(
      qty * Number(info.cost) * 1.3 > 300
        ? qty * Number(info.cost) * 1.3
        : qty * Number(info.cost) * 1.3 + 150
    );

    /* timestamp*/
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;

    db.collection("user")
      .doc(uid)
      .collection("pastOrders")
      .add({
        ...info,
        productId: productId,
        orderedOn: today,
        total: totalPrice,
        numberOfUnits: qty,
      })
      .then((doc) => {
        db.collection("All_Orders")
          .doc(doc.id)
          .set({
            ...info,
            productId: productId,
            orderedOn: today,
            total: totalPrice,
            customerId: uid,
            numberOfUnits: qty,
          });
        handleClose2();
        var email_details = {
          order_id: doc.id,
          message: `total: Rs. ${totalPrice}....  \nno. of units: ${qty}....  Product: ${info.name}`,
          to_email: userInfo.mail,
          to_name: userInfo.name,
        };
        sendEmail(email_details);
      });
  };

  return (
    <div>
      
      <div className="productDetails_title">
        <p>{info ? info.name : null}</p>
      </div>
      <div className="productDetails_flex">
        <div className="productDetails_insideflex1">
          {info ? info.urlList.map((m)=>( 
            <img src={m} alt="imageofproduct" />
          )):null}
          
         
        </div>

        <div className="productDetails_insideflex2">
          <img src={info? info.url:null} alt="imageofproduct" />
        </div>
        <div className="productDetails_insideflex3">
          <p className="description">{
            info ? info.ingredients : null}
          </p>
          <span>
         
          </span>
          <p>Size:</p>

          <div className="row justify-content-center mb-1">
            {info?(info.size.map((s)=>
             <button className="row-btn">{s}</button>
            )):null}
           
          </div>
          <div className="row justify-content-center align-items-center">
            <p className="acprize">Rs. {info ? info.cost :null}</p>
            <p className="cprize ml-4">Rs. {info ? info.mrp :null}</p>
          </div>
          <button onClick={addToCart} className="cartbutton">
            Add to Cart
          </button>
          {/* .........................rough............ */}

          <p className="checkdeliver">Check if we Deliver to your Pincode</p>
          <span>
            <input type="text" placeholder="ENTER PINCODE" />
            <button className="checkbutton">CHECK</button>
          </span>
        </div>
      </div>
      <hr style={{width:"100%"}}/>
      <div className="productDetails_description_flex">
        <div className="productDetails_description_insideflex1">
          <p className="productdescriptiontitle">PRODUCT DESCRIPTION</p>
          <p>{info ? info.description :null}</p>
         
        </div>
        <div className="productDetails_description_insideflex2">
          <img src={Productdescription} alt="hry" />
        </div>
      </div>

      
      <div
        className="carousel-styling"
        style={{ justifyContent: "center", paddingBottom: "40px" }}
      >
     </div>
    </div>
  
  );
};
export default ShopPage;
