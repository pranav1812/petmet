import React, {useState, useEffect} from "react";
import Carousel from "./Carousel";
/*import Rating from "@material-ui/lab/Rating";*/
import '../Admin/Admin.css'
import "./shoppage.css";
import {db, auth} from '../../firebase'
// import BestSellers from "../dashboardclient/BestSellers";
import {useParams} from 'react-router-dom'
import { Modal, Form, Button } from "react-bootstrap";
import ls from 'local-storage'

const ShopPage = () => {
  
  const [userInfo, setUserInfo] = useState(null)
  const [paymentMode,setPaymentMode]= useState(null)
  const [newDeliveryAddress,setNewDeliveryAddress]= useState(null)
  const [show, setShow] = useState(false)
  const [showw, setShoww] = useState(false)
  const [info, setInfo]= useState(null)
  const [qty, setQty]=useState(1)
  const {productId, subComponent}= useParams()
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        db.collection('user').doc(user.uid).get()
          .then(doc=>{
            setUserInfo(doc.data())
          })
      }
    })
    db.collection('items').doc(subComponent).collection('products').doc(productId).get()
      .then(doc=>{
        setInfo(doc.data().details)
      })
  }, [qty])

  const handleClose1=()=>setShow(false);
  const handleShow1=()=>setShow(true);

  const handleClose2=()=>setShoww(false);
  const handleShow2=()=>{
    setShow(false)
    setShoww(true)
  }

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

  const confirmOrder=()=>{
    console.log(newDeliveryAddress || userInfo.address)
    console.log(paymentMode)
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
          <button onClick={handleShow1}>Buy Now</button>
        </div>
      
      <hr style={{ color: "rgba(0,0,0,0.1" }} />

      <Modal show={show} onHide={handleClose1} centered>
          <Modal.Header closeButton>
            <Modal.Title>Order Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>Order Details</h3>
            <div className="row">
              <div className="col-12 col-sm-6 mt-5" style={{textAlign: "center"}}>
                <img 
                src={info.url}
                height="200px"
                width="90%"
                alt= {info.name}></img>
              </div>
              <div className="col-12 col-sm-6">
                <div className="row mt-3 mb-3 justify-content-center">
                  <h5><strong>{info.name}</strong></h5>
                </div>
                <div className="row">
                  <strong className="col-8">Quantity</strong>
                  <input className="col-4" type="number" min="1" max={info.quantity} defaultValue="1" onChange={(e)=>{setQty(Number(e.target.value))}}></input>
                </div>
                <div className="row">
                  <strong className="col-8">Cost of 1 Product</strong>
                  <p>Rs. {info.cost}</p>
                </div>
                <div className="row">
                  <strong className="col-8">Cost of Products</strong>
                  <p>Rs. {info.cost*qty}</p>
                </div>
                <div className="row">
                  <strong className="col-8">GST</strong>
                  <p>Rs. {0.3*info.cost*qty}</p>
                </div>
                <div className="row">
                  <strong className="col-8">Delivery Charges</strong>
                  <p>Rs. {1.3*info.cost*qty>300 ? 0: 150}</p>
                </div>
                <div className="row">
                  <strong className="col-8">Total Cost</strong>
                  <p>Rs. {1.3*info.cost*qty>300 ? 1.3*info.cost*qty: 150+ 1.3*info.cost*qty}</p>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleShow2} className="pink_out">Next</button>
            <button onClick={handleClose1} className="pink_out">Cancel</button>
          </Modal.Footer>
      </Modal>

      <Modal size="lg" show={showw} onHide={handleClose2} centered>
          <Modal.Header closeButton>
            <Modal.Title>Order Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <div className="row mb-4">
                <h6 className="col-4"><strong>Delivery Address: {userInfo? userInfo.address: null} </strong></h6>
                <h6>Another Address</h6>
                <input type="text" placeholder={userInfo? userInfo.address: null} onBlur={(e)=>{e.target.value.trim!=" "? setNewDeliveryAddress(e.target.value): setNewDeliveryAddress(userInfo.address)}} />
              </div>
              <div>
                <h5><strong>Payment Options</strong></h5>
                <Form>
                  
                  <select onChange={(e)=>{setPaymentMode(e.target.value)}}>
                    <option value="nb" >Net Banking</option>
                    <option value="cod" >Cash on Delivery</option>
                    <option value="upi" >UPI Payment</option>
                    <option value="card" >Debit/Credit/ATM Card</option>
                  </select>
                  
                </Form>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="pink_out" onClick={confirmOrder} >Confirm Order</button>
            <button className="pink_out" onClick={handleClose2}>Cancel</button>
          </Modal.Footer>
      </Modal>
      
      
      
      </div>
      
      ): <h2>please wait</h2>}

      
      
    </div>
  );
};
export default ShopPage;
