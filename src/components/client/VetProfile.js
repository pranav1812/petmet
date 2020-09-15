import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
//import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
//import Typography from '@material-ui/core/Typography';
//import ButtonBase from '@material-ui/core/ButtonBase';
import { db, auth } from "../../firebase";
import Doctor from "../pictures/doc.jpg";
//import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { BiClinic } from "react-icons/bi";
import { RiStethoscopeLine, RiChat3Line } from "react-icons/ri";
import { FiVideo } from "react-icons/fi";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

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

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="example-modal-sizes-title-sm"
      centered
      dialogClassName="modal-50w"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          BOOK AN APPOINTMENT
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4></h4>
        <Container>
          <p>
            <Row>
              <Col /*sm={8} xs={12} md={8}*/>
                <button
                  type="button"
                  variant="primary"
                  size="lg"
                  block
                  color="#36A9CC"
                  className="btn-block pink_out"
                  onClick={MyVerticallyCenteredModal}
                >
                  <span>
                    <BiClinic className="mb-1" />{" "}
                  </span>{" "}
                  VISIT CLINIC
                </button>
              </Col>
            </Row>
            <p></p>
            <Row>
              <Col /*sm={8} xs={12} md={8}*/>
                <button
                  type="button"
                  variant="primary"
                  size="lg"
                  block
                  color="#FE434C"
                  className="btn-block pink_out"
                >
                  <span>
                    <RiStethoscopeLine className="mb-1" />{" "}
                  </span>{" "}
                  VET HOME VISIT
                </button>
              </Col>
            </Row>
            <p></p>

            <Row>
              <Col /*sm={8} xs={12} md={8}*/>
                <button
                  type="button"
                  variant="primary"
                  size="lg"
                  block
                  className="btn-block pink_out"
                >
                  <span>
                    <FiVideo className="mb-1" />{" "}
                  </span>{" "}
                  VIDEO CALL
                </button>
              </Col>
            </Row>
            <p></p>

            <Row>
              <Col /*sm={8} xs={12} md={8}*/>
                <button
                  type="button"
                  variant="primary"
                  size="lg"
                  block
                  className="btn-block pink_out"
                >
                  <span>
                    <RiChat3Line className="mb-1" />{" "}
                  </span>{" "}
                  CHAT
                </button>
              </Col>
            </Row>
            <p></p>
          </p>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default function VetProfile() {
  const [vet, setVet] = useState(null);
  const [uid, setUid] = useState(null);

  useEffect((user) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUid(user.uid);
        db.collection("vet")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              db.collection("vet")
                .doc(user.uid)
                .get()
                .then((docs) => {
                  var temp = [];
                  docs.map((doc) => {
                    temp.push(doc.data());
                  });
                  setVet(temp);
                });
            }
          });
      }
    });
  }, []);

  //   // ............................end...................................

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="container profile_container">
      <div className="row justify-content-center">
        {/* ........................................... */}
        {vet ? (
          vet.map((vets) => (
            <div>
              <div className="col-12 col-md-5 offset-sm-1">
                <h4 className="mt-2 mb-3 head">{vets.Name}</h4>
                <img src={Doctor} className="profile_img" />
                <p style={{ color: "#36A9CC" }} className="mt-2">
                  Verified
                </p>
              </div>
              <div className="col-12 col-md-6">
                <div className="row mt-5 mt-sm-2">
                  <strong className="col-6 col-sm-5 col-lg-3">Name:</strong>
                  <p className="col">{vets.Name}</p>
                </div>
                <div className="row">
                  <strong className="col-6 col-sm-5 col-lg-3">Address:</strong>
                  <p className="col">{vets.Address}</p>
                </div>
                <div className="row">
                  <strong className="col-6 col-sm-5 col-lg-3">City:</strong>
                  <p className="col">{vet.city}</p>
                </div>
                <div className="row">
                  <strong className="col-6 col-sm-5 col-lg-3">State:</strong>
                  <p className="col">{vets.state}</p>
                </div>
                <div className="row">
                  <strong className="col-6 col-sm-5 col-lg-3">
                    Mobile No:
                  </strong>
                  <p className="col">{vets.phone}</p>
                </div>
                <div className="row">
                  <strong className="col-6 col-sm-5 col-lg-3">
                    Qualification:
                  </strong>
                  <p className="col">{vets.Qualification}</p>
                </div>
                <div className="row">
                  <strong className="col-6 col-sm-5 col-lg-3">
                    Experience:
                  </strong>
                  <p className="col">{vets.experience}</p>
                </div>

                <div className="row">
                  <strong className="col-6 col-sm-5 col-lg-3">
                    Achievements:
                  </strong>
                  <p className="col">{vets.Achievements}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h5>Wait...loading</h5>
        )}

        {/* ...................................................... */}

        <button
          type="button"
          className="pink_out"
          onClick={() => setModalShow(true)}
        >
          Book an Appointment
        </button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  );
}
