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
import VetConfirmation from './VetConfirmation';
import {Link} from 'react-router-dom';


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
  const [mode, setMode] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
//  const [usr, setUsr] = useState(null); 

  useEffect(()=>{
      auth.onAuthStateChanged(user=>{
        db.collection("vet").doc(vid).get().then(doc=>{
          if(doc.exists){
            setVet(doc.data())
          }
        }) 
        if(user){
          db.collection("user").doc(user.uid).get().then(doc=>{
            if(doc.exists){
              setUsr(doc.data())
            }
          })
        }

      })
     
      
  },[mode])

const toggle=(md)=>{
  //setShow(!show)
  setMode(md)
 if (md == 'Home Visit' ){
   setShow(true)
  }
  else{setShow(false)}
}  

const submit=()=>{
 var user = auth.currentUser
 db.collection("user").doc(user.uid).collection("appointments").add({
   date: date, 
   mode: mode,
   time: time,
   patientId: user.uid,
   doctorId: vid,
   }).then(()=>{alert("done")})
      .catch((err)=>{console.error(err)})  
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
            <h6 className="clinic_name name">{vet.Name}</h6>
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
          {/* <div className="dropdown mt-4 drp_btn"> */}
           {/* <a className="btn btn-block dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Choose appointment method
    </a> */}
                          {/* <Form.Group className="row">
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" style={{backgroundColor:"#e6e6e6",marginLeft:"60px",border:"none",fontSize:"17px"}} as="select" onChange={(e)=>{toggle(e.target.value)}}>
                                <option defaultChecked>Choose appointment method</option>
                                <option>Home Visit</option>
                                <option>Clinic Visit</option>
                                <option>Video Call</option>
                                <option>Chat</option>
                            </Form.Control>
                        </Form.Group>
          </div>
         <div className="dropdown mt-4 drp_btn">
            <a className="btn btn-block dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Choose Date
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{textAlign:"center"}}>
              <Form.Group className="row" >
                <input style={{border:"none",fontSize:"20px",paddingLeft:"30%",textAlign:"center"}} className="input_field" type="date"  name="date" onChange={(e)=>{setDate(e.target.value)} } />
              </Form.Group>
            </div>
          </div>
         <div className="dropdown mt-4 drp_btn">
            <a className="btn btn-block dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Choose Time Slot
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Form.Group className="row">
                <input style={{border:"none",fontSize:"20px",paddingLeft:"30%",textAlign:"center"}} className="input_field" type="time"  name="time" onChange={(e)=>{setTime(e.target.value)} } />
              </Form.Group>
            </div>    
          </div> */}
          <div className="col-12">
            <Form.Group>
              <Form.Control className="col-12 mt-3" style={{backgroundColor:"#e6e6e6",fontSize:"14px",width:"100%",borderRadius:"2px",height:"40px"}} as="select" onChange={(e)=>{toggle(e.target.value)}}>
                  <option defaultChecked>Choose appointment method</option>
                  <option>Home Visit</option>
                  <option>Clinic Visit</option>
                  <option>Video Call</option>
                  <option>Chat</option>
              </Form.Control>
            </Form.Group>
          </div>
          <div className="col-12">
            <Form.Group>
              <input style={{backgroundColor:"#e6e6e6",marginLeft:"100px",marginBottom:"20px",fontSize:"14px",width:"100%",borderRadius:"2px",height:"40px",border:"#bdbdbd solid 1px",color:"#686868",textAlign:"left",paddingLeft:"15px"}} className="input_field" type="date"  name="date" onChange={(e)=>{setDate(e.target.value)} } />
            </Form.Group>
          </div>
          <div className="col-12">
            <Form.Group>
              <input style={{backgroundColor:"#e6e6e6",marginLeft:"60px",fontSize:"14px",width:"100%",borderRadius:"2px",height:"40px",border:"#bdbdbd solid 1px",color:"#686868",textAlign:"left",paddingLeft:"15px"}} className="input_field" type="time"  name="time" onChange={(e)=>{setTime(e.target.value)} } />
            </Form.Group>
          </div>
          {show==true && usr?
          <div className="col-12 mt-4">
            <div className="address">
              <div style={{textAlign:"left"}}>
                <input className="ml-3 mb-2" type="radio" checked></input>
                <div className="ml-3" style={{textAlign:"left"}}>
          <h6>{usr.name}</h6>
                  <p>{usr.address}</p>
          <p>{usr.zip}</p>
                  <p>{usr.phone}</p>
                  <button className="mr-3 addressbtn">REMOVE</button>
                  <button className="addressbtn">EDIT</button>
                </div>
              </div>
            </div>
          {/*  <div className="addadd mt-4">
              <p>Add a new Address</p>
              <input type="text" > </input>
            </div>
          */}
          </div>:null}
          <Link to="/vetconfirmation">
            <button className="blueButton">Request Booking</button>
          </Link>
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
