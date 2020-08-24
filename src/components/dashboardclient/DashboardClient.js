import React, {useEffect, useState} from "react";
import RoundCard from "./RoundCard";
//import Navbar from "../../navbar.js";
import "./dashboard.css";
import TopCarousel from "./TopCarousel";
import BestSellers from "./BestSellers.js";
//import AppBar from "@material-ui/core/AppBar";
import { FooterContainer } from "../footer/containers/footer";
//import catessentials from "../pictures/image 3.png";
//import harness from "../pictures/image 4.png";
//import grooming from "../pictures/image 5.png";
import {Router, Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/Button'
import food from "../pictures/image 6.png";
import {db} from '../../firebase'

const DashboardClient = () => {
  const [categories, setCategories]= useState(null)
  useEffect(()=>{
    db.collection('items').get()
      .then(docs=>{
        console.log(docs.length)
        var temp=[]
        docs.forEach(doc=>{
          temp.push(doc.id)
        })
        setCategories(temp)
        
      })
  },[])
  return (
    <div>
      {/* <Navbar /> */}
      <div className="carouselandcards">
        <div className="carousel">
          <TopCarousel />
        </div>
        <h4 className="topbanner">
          Shop for Rs2000 and get a voucher worth Rs345
        </h4>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
  <Link to='/Addpet/'><Button>Add Pet</Button></Link>
  <Link to='/Appointment/'><Button>Appointment</Button> </Link>
</ButtonGroup>
        <div className="cards">
          {
            categories? categories.map(cat=><RoundCard title={cat} image={food} />): null
          }

          
        </div>
        <h2 className="headers">BEST SELLERS</h2>
        <div className="productcards">
          <BestSellers />
        </div>
        <h2 className="headers">ACCESSORIES</h2>
        <div className="productcards">
          <BestSellers />
        </div>
        <h2 className="headers">SPECIAL TOYS</h2>
        <div className="productcards">
          <BestSellers />
        </div>
        <FooterContainer />
      </div>
    </div>
  );
};
export default DashboardClient;
