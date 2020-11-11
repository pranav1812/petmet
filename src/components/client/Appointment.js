import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";
import "./appointment.css";
import vetpic from "../pictures/image 36.png";
import { Form, Button } from "react-bootstrap";
import dog from "../pictures/dog.png";
import rabbit from "../pictures/rabbit.png";
import cat from "../pictures/cat.png";
import { Link } from "react-router-dom";

const home =
  window.location.protocol + "//" + window.location.host + "/" + "Home/";

const useStyles = makeStyles((theme) => ({
  vet: {
    // position: "absolute",
    // width: "141px",
    // height: "23px",
    // left: "130px",
    // top: "238px",
    // fontfamily: "Roboto",
    // fontstyle: "normal",
    // fontweight: "500",
    // fontsize: "20px",
    // lineheight: "23px",
    // color: "#000000",
  },

  image: {
    // position: "absolute",
    // width: "94px",
    // height: "94px",
    // left: "19px",
    // top: "238px",
    // background: "url(Rectangle60.png)",
    // background: "#C4C4C4",
    // borderradius: "3px",
  },

  address: {
    // position: "absolute",
    // width: "206px",
    // height: "15px",
    // left: "130px",
    // top: "288px",

    // fontfamily: "Roboto",
    // fontstyle: "normal",
    // fontweight: "500",
    // fontsize: "13px",
    // lineheight: "15px",

    color: "#B5B5B5",
  },

  open: {
    // position: "absolute",
    // width: "31px",
    // height: "15px",
    // left: "130px",
    // top: "310px",

    // fontfamily: "Roboto",
    // fontstyle: "normal",
    // fontweight: "500",
    // fontsize: "13px",
    // lineheight: "15px",

    color: "#B5B5B5",
  },

  dist: {
    // position: "absolute",
    // width: "34px",
    // height: "14px",
    // left: "354px",
    // top: "314px",
    // fontfamily: "Roboto",
    // fontstyle: "normal",
    // fontweight: "normal",
    // fontsize: "12px",
    // lineheight: "4px",
    /* identical to box height */
    // color: "#000000",
  },
}));

export default function Appointment() {
  const classes = useStyles();
  const [vets, setVets] = useState(null);

  const [usr, setUsr] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        alert("login required");
        window.location = home;
      } else {
        setUsr(user);
        db.collection("user")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              var city = doc.data().city;
              db.collection("vet")
                .where("city", "==", city)
                .get()
                .then((docs) => {
                  var temp = [];
                  docs.forEach((vet) => {
                    temp.push({ ...vet.data(), key: vet.id });
                  });
                  setVets(temp);
                })
                .catch((err) => console.error(err));
            }
          })
          .catch((err) => console.error(err));
      }
    });
  });
  return (
    <div>
      <p className="apptitle"> Vet Appointment</p>
      <div className="two_appflex">
        <div>
          {usr ? (
            <div>
              {/* <div className="bothappflex"> */}

              <div className="left_appflex">
                <p>Use Filters</p>
                <button>Visit Clinic</button>
                <button>Home Visit</button>
                <button>Video Call</button>
                <button>Chat</button>
              </div>
            </div>
          ) : null}
        </div>
        <div>
          {vets
            ? vets.map((vet) => (
                //     <div className="container ">
                //       <div className="row ">
                //         <div className="image">
                //           <img src={dog} className="profile_img" />
                //         </div>
                //         <div className="hi">
                //           <Link to={"/VetProfile/"+vet.key}>
                //             <div className="vet">
                //               <p></p>
                //               <strong className="col">{vet.Name} </strong>
                //             </div>
                //           </Link>
                //           <div className="open">
                //             <p className="col">{vet.Qualification} </p>
                //           </div>
                //           <div className="open">
                //             <p className="col">{vet.experience} </p>
                //           </div>
                //           <div className="address">
                //             <p className="col">{vet.Address} </p>
                //           </div>
                //         </div>
                //       </div>
                //       <hr />
                // </div>
                <div>
                  <div className="right_appflex">
                    <div className="apptile">
                      <span>
                        <img src={vetpic} alt="" />
                      </span>
                      <div className="apptile_p">
                        <p>
                          <span className="vetname">Arvind Jain</span>

                          <span className="closevet">(5 years experience)</span>

                          <span
                            className="closevet"
                            style={{ justifyContent: "right" }}
                          >
                            5.6km
                          </span>
                        </p>
                        <p className="vettype">
                          Ortho Vet Clinic
                          <div className="vetaddress">
                            Shop No. 17, Sector 6, Market Road, Chandigarh
                          </div>
                        </p>
                        <p style={{ paddingTop: "23.64px" }}>
                          <span className="open">Open</span>
                          <span className="closevet">Closes 9PM</span>
                          <span>
                            <button
                              style={{ float: "right" }}
                              className="bookappointment"
                            >
                              Book Appointment
                            </button>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <br />
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
