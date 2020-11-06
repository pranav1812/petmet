import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { db, auth } from "../../firebase";
import Doctor from "../pictures/doc.jpg";
import { useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { BiClinic } from "react-icons/bi";
import { RiStethoscopeLine, RiChat3Line } from "react-icons/ri";
import { FiVideo } from "react-icons/fi";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import Declarations from "./Declarations";
import './VetProfile.css';
import Add from '../pictures/Rectangle 154.png';

const home =
  window.location.protocol + "//" + window.location.host + "/" + "Home/";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: "auto",
    width: "100%",
    height: "500px",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    width: "100%",
    height: "100%",
  },
  image: {
    width: "25%",
    height: "80%",
  },
  img: {
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
  },
}));

export default function Profile() { const classes = useStyles();
  const [vet, setVet] = useState(null);
  const {subComponent } = useParams();
  const vid = subComponent;
  const [usr, setUsr] = useState(null);
  const [show, setShow] = useState(false);
  
  useEffect(()=>{
      db.collection("vet").doc(vid).get().then(doc=>{
      if(doc.exists){
        setVet(doc.data())
      }
    })
    
  },[])

const toggle=()=>{
  setShow(!show)
}  

  return (
  //   <div className="container profile_container">
      
  //     {vet 
  //     ? ( <div className="row justify-content-center">
  //     <div className="col-12 col-md-5 offset-sm-1">
  //       <h4 className="mt-2 mb-3 head">Name of Vet</h4>
  //       <img src={vet.imgUrl} className="profile_img" />
  //       <p style={{color: "#36A9CC"}} className="mt-2">Verified</p>
  //     </div>
  //     <div className="col-12 col-md-6">
  //       <div className="row mt-5 mt-sm-2">
  //         <strong className="col-6 col-sm-5 col-lg-3">Name:</strong>
  //         <p className="col">{vet.Name}</p>
  //       </div>
  //       <div className="row">
  //         <strong className="col-6 col-sm-5 col-lg-3">Address:</strong>
  //         <p className="col">{vet.Address}</p>
  //       </div>
  //       <div className="row">
  //         <strong className="col-6 col-sm-5 col-lg-3">City:</strong>
  //         <p className="col">{vet.city}</p>
  //       </div>
  //       <div className="row">
  //         <strong className="col-6 col-sm-5 col-lg-3">State:</strong>
  //         <p className="col">{vet.state}</p>
  //       </div>
  //       <div className="row">
  //         <strong className="col-6 col-sm-5 col-lg-3">Mobile No:</strong>
  //         <p className="col">{vet.phone}</p>
  //       </div>
  //       <div className="row">
  //         <strong className="col-6 col-sm-5 col-lg-3">Qualification</strong>
  //         <p className="col">{vet.Qualification}</p>
  //       </div>
  //       <div className="row">
  //         <strong className="col-6 col-sm-5 col-lg-3">Experience:</strong>
  //         <p className="col">{vet.experience}</p>
  //       </div>
  //       <div className="row">
  //         <strong className="col-6 col-sm-5 col-lg-3">Achievements:</strong>
  //         <p className="col">{vet.Achievements}</p>
  //       </div>
  //     </div>
  //   </div>
  //  ):null}
  //     <Declarations />
  //   </div>
  <div className="outer">
    {vet ?  (
    <div>
      <h3 className="clinic_name mb-4">{vet.clinicName}</h3>
      <div className="row mb-3">
        <div className="col-12 col-lg-4 vet_p_card">
          <div className="card_img">
            <img src={vet.imgUrl} className="profile_img" />
            <h6 className="clinic_name">{vet.Name}</h6>
          </div>
          <div className="row justify-content-center">
            <span class="badge-des">Vet</span>
            <span class="badge-des">Training</span>
            <span class="badge-des">Grooming</span>
          </div>
          <div className="text_info ml-4">
            <div className="row mt-2">
              <p className="col-4">
                Qualification:
              </p>
              <p className="col" style={{color:"black"}}>
                {vet.Qualification}
              </p>
            </div>
            <div className="row">
              <p className="col-4">
                Address:
              </p>
              <p className="col" style={{color:"black"}}>
              {vet.Address}
              </p>
            </div>
            <div className="row">
              <p className="col-4">
                City:
              </p>
              <p className="col" style={{color:"black"}}>
                {vet.city}
              </p>
            </div>
            <div className="row">
              <p className="col-4">
                State:
              </p>
              <p className="col" style={{color:"black"}}>
                {vet.state}
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 appointment">
          <h4>Book an Appointment</h4>
          <div className="dropdown mt-4 drp_btn">
            <a className="btn btn-block dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Choose appointment method
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" onClick={toggle}>Home Visit</a>
              <a className="dropdown-item" href="#">Clinic Visit</a>
              <a className="dropdown-item" href="#">Video Call</a>
              <a className="dropdown-item" href="#">Chat</a>
            </div>
          </div>
          <div className="dropdown mt-4 drp_btn">
            <a className="btn btn-block dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Choose Date
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
          <div className="dropdown mt-4 drp_btn">
            <a className="btn btn-block dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Choose Time Slot
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
          {show==true?
          <div className="mt-4">
            <div className="address">
              <div style={{textAlign:"left"}}>
                <input className="ml-3 mb-2" type="radio" checked></input>
                <div className="ml-3" style={{textAlign:"left"}}>
                  <h6>Nishant Saini</h6>
                  <p>House No. 123, Sector 15 Panchkula, Haryana, India</p>
                  <p>134113</p>
                  <p>98998 98998</p>
                  <button className="mr-3 addressbtn">REMOVE</button>
                  <button className="addressbtn">EDIT</button>
                </div>
              </div>
            </div>
            <div className="addadd mt-4">
              <p>Add a new Address</p>
            </div>
          </div>:null}
          <button className="blueButton">Request Booking</button>
        </div>
        <div className="col-12 col-lg-4" style={{textAlign:"center"}}>
          <img className="add_img" src={Add} />
        </div>
      </div>
    </div>
    ):null}
  </div>
  );
}
