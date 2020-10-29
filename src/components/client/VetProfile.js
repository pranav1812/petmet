import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
//import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
//import Typography from '@material-ui/core/Typography';
//import ButtonBase from '@material-ui/core/ButtonBase';
import { db, auth } from "../../firebase";
import Doctor from "../pictures/doc.jpg";
import { useParams } from "react-router-dom";
//import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { BiClinic } from "react-icons/bi";
import { RiStethoscopeLine, RiChat3Line } from "react-icons/ri";
import { FiVideo } from "react-icons/fi";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import Declarations from "./Declarations";

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

// .............................................................

// ..........................................................
// function timeLapse(){
//   return(
//   <Modal size="lg"  centered>
//   <Modal.Header closeButton>
//     <Modal.Title>Order Item</Modal.Title>
//   </Modal.Header>
//   <Modal.Body>
//     <div className="container">
//       <div className="row mb-4">
//         <h6>Another Address</h6>
//         </div>
//     </div>
//   </Modal.Body>
// </Modal>
//   )
// }
// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="sm"
//       aria-labelledby="example-modal-sizes-title-sm"
//       centered
//       dialogClassName="modal-50w"
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           BOOK AN APPOINTMENT
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4></h4>
//         <Container>
//           <p>
//             <Row>
//               <Col /*sm={8} xs={12} md={8}*/>
//                 <button
//                   type="button"
//                   variant="primary"
//                   size="lg"
//                   block
//                   color="#36A9CC"
//                   className="btn-block pink_out"
//                 >
//                   <span>
//                     <BiClinic className="mb-1" />{" "}
//                   </span>{" "}
//                   VISIT CLINIC
//                 </button>
//               </Col>
//             </Row>
//             <p></p>
//             <Row>
//               <Col /*sm={8} xs={12} md={8}*/>
//                 <button
//                   type="button"
//                   variant="primary"
//                   size="lg"
//                   block
//                   color="#FE434C"
//                   className="btn-block pink_out"
//                 >
//                   <span>
//                     <RiStethoscopeLine className="mb-1" />{" "}
//                   </span>{" "}
//                   VET HOME VISIT
//                 </button>
//               </Col>
//             </Row>
//             <p></p>

//             <Row>
//               <Col /*sm={8} xs={12} md={8}*/>
//                 <button
//                   type="button"
//                   variant="primary"
//                   size="lg"
//                   block
//                   className="btn-block pink_out"
//                 >
//                   <span>
//                     <FiVideo className="mb-1" />{" "}
//                   </span>{" "}
//                   VIDEO CALL
//                 </button>
//               </Col>
//             </Row>
//             <p></p>

//             <Row>
//               <Col /*sm={8} xs={12} md={8}*/>
//                 <button
//                   type="button"
//                   variant="primary"
//                   size="lg"
//                   block
//                   className="btn-block pink_out"
//                 >
//                   <span>
//                     <RiChat3Line className="mb-1" />{" "}
//                   </span>{" "}
//                   CHAT
//                 </button>
//               </Col>
//             </Row>
//             <p></p>
//           </p>
//         </Container>
//       </Modal.Body>
//     </Modal>
//   );
// }

// export default function VetProfile() {
//   const [vets, setVets] = useState(null);
//   const [qty, setQty] = useState(1);
//   const [uid, setUid] = useState(null);
//   const [userInfo, setUserInfo] = useState(null);
//   const { productId, subComponent } = useParams();
  // const { uid, setUid } = useParams();
  // const { subComponent } = useParams();

  /*const [usr, setUsr] = useState(null);
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
    db.collection("vet")
      .doc(productId)
      .get()
      .then((doc) => {
        setVets(doc.data());
        // setTotalPrice(doc.data().details.cost)
      });
  }, [qty]);*/

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (!user) {
  //       alert("login required");
  //       window.location = home;
  //     } else {
  //       setUsr(user);
  //       db.collection("vet")
  //         // kaunse vet ka doc uthana yeh usko kaise pta?
  //         .doc(uid)
  //         .get()
  //         .then((doc) => {
  //           if (doc.exists) {
  //             var Name = doc.data().Name;
  //             db.collection("vet")
  //               .where("Name", "==", Name)
  //               .get()
  //               .then((docs) => {
  //                 var temp = [];
  //                 docs.forEach((vet) => {
  //                   temp.push(vet.data());
  //                 });
  //                 setVets(temp);
  //               })
  //               .catch((err) => console.error(err));
  //           }
  //         })
  //         .catch((err) => console.error(err));
  //     }
  //   });
  // });
  //   // ............................end...................................

  // const [modalShow, setModalShow] = React.useState(false);

//   return (
    
//         {/* <button type="button" className="pink_out" onClick={Declarations}>
//           Book an Appointment
//         </button>  */}

//     //     <Declarations />
//     //   </div>
//     // </div>
    
//   );
// }// https://stackoverflow.com/questions/61152718/send-meeting-url-using-google-meet-api

export default function Profile() {
  const classes = useStyles();
  const[uid,setUid] = useState(null)
  const[vet,setVet] = useState(null)
  const [state, setState]= useState({})
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        setUid(user.uid)
        db.collection('vet').doc(user.uid).get()
          .then(doc=>{
            if(doc.exists){
             // docs.forEach(doc=>{
              setVet(doc.data())}
          }
          )
      }
    })
    
  },[])

      console.log(state)
  return (
    <div className="container profile_container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-5 offset-sm-1">
          <h4 className="mt-2 mb-3 head">Name of Vet</h4>
          <img src={vet?vet.imgUrl:null} className="profile_img" />
          <p style={{color: "#36A9CC"}} className="mt-2">Verified</p>
        </div>
        <div className="col-12 col-md-6">
          <div className="row mt-5 mt-sm-2">
            <strong className="col-6 col-sm-5 col-lg-3">Name:</strong>
            <p className="col">{vet?vet.Name:null}</p>
          </div>
          <div className="row">
            <strong className="col-6 col-sm-5 col-lg-3">Address:</strong>
            <p className="col">{vet?vet.Address:null}</p>
          </div>
          <div className="row">
            <strong className="col-6 col-sm-5 col-lg-3">City:</strong>
            <p className="col">{vet?vet.city:null}</p>
          </div>
          <div className="row">
            <strong className="col-6 col-sm-5 col-lg-3">State:</strong>
            <p className="col">{vet?vet.state:null}</p>
          </div>
          <div className="row">
            <strong className="col-6 col-sm-5 col-lg-3">Mobile No:</strong>
            <p className="col">{vet?vet.phone:null}</p>
          </div>
          <div className="row">
            <strong className="col-6 col-sm-5 col-lg-3">Qualification</strong>
            <p className="col">{vet?vet.Qualification:null}</p>
          </div>
          <div className="row">
            <strong className="col-6 col-sm-5 col-lg-3">Experience:</strong>
            <p className="col">{vet?vet.experience:null}</p>
          </div>
          <div className="row">
            <strong className="col-6 col-sm-5 col-lg-3">Achievements:</strong>
            <p className="col">{vet?vet.Achievements:null}</p>
          </div>
        </div>
      </div>
      <Declarations />
    </div>
  );
}
