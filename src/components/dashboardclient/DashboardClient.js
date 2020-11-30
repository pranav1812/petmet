import React, { useEffect, useState } from "react";
import RoundCard from "./RoundCard";
import SquareCard from "./SquareCard";
//import Navbar from "../../navbar.js";
import "./dashboard.css";
import TopCarousel from "./TopCarousel";
import BestSellers from "./BestSellers.js";
import Carousel from 'react-elastic-carousel';
//import AppBar from "@material-ui/core/AppBar";
//import catessentials from "../pictures/image 3.png";
//import harness from "../pictures/image 4.png";
//import grooming from "../pictures/image 5.png";

//import food from "../pictures/image 6.png";
import { db } from "../../firebase";

import { Router, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/Button";
import Vet from '../pictures/vet_img.png';
import Dogs from '../pictures/fc1.png';
import SmallAnimals from '../pictures/fc2.png';
import Cats from '../pictures/fc3.png';
import Birds from '../pictures/fc4.png';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 240, itemsToShow: 1 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];

const styles = {
  carouselroot: {
    padding: " 0px !important",
  },
};

const DashboardClient = () => {
  const [categories, setCategories] = useState(null);
  const [bestSellers, setBestSellers] = useState(null);
  const [accessories, setAccessories] = useState(null);
  const [toys, setToys] = useState(null);
  useEffect(() => {
    db.collection("items")
      .get()
      .then((docs) => {
        var temp = [];
        docs.forEach((doc) => {
          if (
            doc.id != "Best Sellers" &&
            doc.id != "Accessories" &&
            doc.id != "Special Toys"
          ) {
            temp.push({ name: doc.id, img: doc.data().img });
          }
        });
        setCategories(temp);
      })
      .catch((e) => console.log(e));

    db.collection("items")
      .doc("Accessories")
      .collection("products")
      .get()
      .then((docs) => {
        var temp = [];
        docs.forEach((doc) => temp.push(doc.data()));
        setAccessories(temp);
      })
      .catch((e) => console.log(e));

    db.collection("items")
      .doc("bestSellers")
      .collection("products")
      .get()
      .then((docs) => {
        var temp = [];
        docs.forEach((doc) => temp.push(doc.data()));
        setBestSellers(temp);
      })
      .catch((e) => console.log(e));

    db.collection("items")
      .doc("Special Toys")
      .collection("products")
      .get()
      .then((docs) => {
        var temp = [];
        docs.forEach((doc) => temp.push(doc.data()));
        setToys(temp);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div style={{overflowX: "hidden"}}>
      <div className="row m-2 mt-0" style={{padding:"0px 2%"}}>
        <div
          style={{ marginTop: "25px" }}
          className="carousel col-12 col-sm-7" 
        >
          <TopCarousel />
          
        </div>
        <div className="col-12 col-sm-5">
          <img 
            src={Vet}
            style={{
              width: "100%"
            }} />
          <Link to="/Appointment/">
            <button className="dashboardbuttons2 btn btn-block btn-sm">Book an Appointment</button>{" "}
          </Link>
        </div>
      </div>

 {/*<div className="topmostbuttonss">
          <Link to="/Addpet/">
            <Button className="dashboardbuttons1">Add Pet</Button>
          </Link>
          
  </div>*/}

      {/*<div className="cards">
        {categories
          ? categories.map((cat) => (
              <Link to={"/ShopProducts/" + cat.name}>
                <RoundCard title={cat.name} image={cat.img} />
              </Link>
            ))
          : null}
      </div>

      <h2 className="headers">BEST SELLERS</h2>
      <div className="productcards">
       
        {bestSellers ? (
          bestSellers.map((bs) => <SquareCard title={bs.name} image={bs.img} />)
        ) : (
          <h5>best sellers arriving</h5>
        )}
       
      </div>

      <h2 className="headers">ACCESSORIES</h2>
      <div className="productcards">
        
        {accessories ? (
          accessories.map((as) => <SquareCard title={as.name} image={as.img} />)
        ) : (
          <h5>accessiories arriving</h5>
        )}
        
      </div>
      <h2 className="headers">SPECIAL TOYS</h2>
      <div className="productcards">
        
        {toys ? (
          toys.map((toy) => <SquareCard title={toy.name} image={toy.img} />)
        ) : (
          <h5>special toys arriving</h5>
        )}
       
        </div> */}

          

        <div className="banner">
            <div>
              <h3 className="mt-4 main-new-head" style={{fontWeight: "bold",textAlign:"left",marginLeft:"13%"}}>Our Features</h3>
            </div>
            <div className="row align-items-center ban_img_div">
              <div className="col-12 col-lg-4">
                <img className="bannerimg" src={Vet} />
              </div>
              <div className="col-12 col-lg-4">
                <img className="bannerimg" src={Vet} />
              </div>
              <div className="col-12 col-lg-4">
                <img className="bannerimg" src={Vet} />
              </div>
            </div>
        </div>
        <h3 className="mt-4" style={{fontWeight: "bold"}}>For all your pet's needs</h3>
        <div className="row ">
          <div className="cards">
          {categories
            ? categories.map((cat) => (
                <Link to={"/ShopProducts/" + cat.name}>
                  <RoundCard title={cat.name} image={cat.img} />
                </Link>
              ))
            : null}
          </div>
        </div>
        <h2 className="mt-4" style={{paddingBottom: "20px"}}>DOG ESSENTIALS</h2>
        <div className="carousel-styling" style={{justifyContent: "center",paddingBottom: "40px"}} >
              <Carousel breakPoints={breakPoints}>
                <item>
                  <SquareCard />
                </item>
                <item>
                  <SquareCard />
                </item>
                <item>
                  <SquareCard />
                </item>
                <item>
                  <SquareCard />
                </item>
              </Carousel>
        </div>
        <h2 className="mt-4" style={{paddingBottom: "20px"}}>CAT ESSENTIALS</h2>
        <div style={{justifyContent: "center",paddingBottom: "40px"}}>
              <Carousel breakPoints={breakPoints}>
                <item>
                  <SquareCard />
                </item>
                <item>
                  <SquareCard />
                </item>
                <item>
                  <SquareCard />
                </item>
                <item>
                  <SquareCard />
                </item>
              </Carousel>
        </div>
        <h3 className="mt-4" style={{fontWeight: "bold",paddingBottom:"20px"}}>FEATURED CATEGORIES</h3>
        <div className="row justify-content-center" style={{paddingBottom: "30px"}}>
          <div className="col-10 col-lg-3" style={{textAlign: "center"}}>
            <img src={Dogs} />
            <h4 className="mt-3" style={{fontWeight: "bold"}}>Dogs</h4>
          </div>
          <div className="col-10 col-lg-3" style={{textAlign: "center"}}>
            <img src={SmallAnimals} />
            <h4 className="mt-3" style={{fontWeight: "bold"}}>Small Animals</h4>
          </div>
          <div className="col-10 col-lg-3" style={{textAlign: "center"}}>
            <img src={Cats} />
            <h4 className="mt-3" style={{fontWeight: "bold"}}>Cats</h4>
          </div>
          <div className="col-10 col-lg-3" style={{textAlign: "center"}}>
            <img src={Birds} />
            <h4 className="mt-3" style={{fontWeight: "bold"}}>Birds</h4>
          </div>
        </div>
        <h2 className="mt-4" style={{paddingBottom: "20px"}}>CAT ESSENTIALS</h2>
        <div style={{justifyContent: "center",paddingBottom: "40px"}}>
              <Carousel breakPoints={breakPoints}>
                <item>
                  <SquareCard />
                </item>
                <item>
                  <SquareCard />
                </item>
                <item>
                  <SquareCard />
                </item>
                <item>
                  <SquareCard />
                </item>
              </Carousel>
        </div>
  </div>
  );
};
export default DashboardClient;
