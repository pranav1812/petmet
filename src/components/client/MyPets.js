import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import add from "../pictures/Vector (1).png";
import outercircle from "../pictures/Ellipse 13.png";
import petprofile from "../pictures/Ellipse 12.png";
import "./mypets.css";
import {Link} from 'react-router-dom';
const MyPetsComponent = () => {
  return (
    <div>
      <div className="loggedinpet">
        <p>Hi Rocky!!</p>
      </div>
      <div className="onepet">
        <img className="petimage" style={{ float: "left" }} src={petprofile} />
        <p className="petname">Rocky</p>
        <p className="petdetails">
          Age: 2 years <br /> Type: Dog(Labrador)
        </p>
      </div>
      <hr />
<<<<<<< HEAD
      <div className="addpet">
      <Link to = '/Addpet/' > 
        <img className="add" style={{ float: "left" }}  src={add} /> 
        </Link>
        <Link to='/Addpet/'><p>Add a Pet</p></Link>
=======
      <div className="addpet onepet">
        <img className="add" style={{ float: "left" }} src={add} />
        <p className="petname">Add a Pet</p>
>>>>>>> 1a827844acd5d889660c76d6ba96aa1688187525
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
