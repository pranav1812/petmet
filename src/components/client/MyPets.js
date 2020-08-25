import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import add from "../pictures/Vector (1).png";
import outercircle from "../pictures/Ellipse 13.png";
import petprofile from "../pictures/Ellipse 12.png";
import "./mypets.css";
import { Link } from "react-router-dom";
const MyPetsComponent = () => {
  return (
    <div className="wholecomponent">
      {/* <div className="loggedinpet">
        <p>Hi Rocky!!</p>
      </div> */}
      <div className="onepet">
        <span>
          <img className="petimage" src={petprofile} />
          <div>
            <p className="petname">Rocky</p>
            <p className="petdetails">
              Age: 2 years <br /> Type: Dog(Labrador)
            </p>
          </div>
        </span>
      </div>

      <div className="onepet">
        <span>
          <Link to="/Addpet/">
            <img className="add" style={{ float: "left" }} src={add} />
          </Link>
          <Link to="/Addpet/">
            <p style={{ marginTop: "18px" }} className="petname">
              Add a Pet
            </p>
          </Link>
        </span>
      </div>
    </div>
  );
};
export default function MyPets() {
  const [usr, setUsr] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        alert("login required");
        window.location = "http://localhost:3000/Home";
      } else {
        setUsr(user);
      }
    });
  });
  return <div>{usr ? <MyPetsComponent /> : null}</div>;
}
