import React, { useEffect, useState } from "react";
import RoundCard from "./RoundCard";
import SquareCard from "./SquareCard";
import "./dashboard.css";
import TopCarousel from "./TopCarousel";
import Carousel from 'react-elastic-carousel';
import { db } from "../../firebase";

import { Router, Link } from "react-router-dom";
import Vet from '../pictures/vet_img.png';
import PetMetFeaturesCarousel from '../client/PetMetFeaturesCarousel';

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
  const [categoriess, setCategoriess] = useState(null);
  const [bestSellers, setBestSellers] = useState(null);
  const [accessories, setAccessories] = useState(null);
  const [cats, setCats] = useState(null);
  const [food, setFood] = useState(null);
  const [groomer, setGroomer] = useState(null);
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
      .get()
      .then((docs) => {
        var temp = [];
        docs.forEach((doc) => {
          if (
            doc.id != "Best Sellers" &&
            doc.id != "Accessories" &&
            doc.id != "Litter Management"&&
            doc.id != "Toys" 
          ) {
            temp.push({ name: doc.id, img: doc.data().img });
          }
        });
        setCategoriess(temp);
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
    .doc("Grooming")
    .collection("products")
    .get()
    .then((docs) => {
      var temp = [];
      docs.forEach((doc) => temp.push(doc.data()));
      setGroomer(temp);
    })
    .catch((e) => console.log(e));

    db.collection("items")
      .doc("Best Sellers")
      .collection("products")
      .get()
      .then((docs) => {
        var temp = [];
        docs.forEach((doc) => temp.push(doc.data()));
        setBestSellers(temp);
      })
      .catch((e) => console.log(e));

      
    db.collection("items")
    .doc("Food")
    .collection("products")
    .get()
    .then((docs) => {
      var temp = [];
      docs.forEach((doc) => temp.push(doc.data()));
      setFood(temp);
    })
    .catch((e) => console.log(e));

    db.collection("items")
    .doc("Cat Essentials")
    .collection("products")
    .get()
    .then((docs) => {
      var temp = [];
      docs.forEach((doc) => temp.push({...doc.data(), key:doc.id }));
      setCats(temp);
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


        <div className="banner">
            <div>
              <h3 className="mt-0 mt-sm-4 main-new-head" style={{fontWeight: "bold",textAlign:"left",marginLeft:"13%"}}>Our Features</h3>
            </div>
            {/* <div className="row align-items-center ban_img_div">
              <div className="col-12 col-lg-4">
                <img className="bannerimg" src={Vet} />
              </div>
              <div className="col-12 col-lg-4">
                <img className="bannerimg" src={Vet} />
              </div>
              <div className="col-12 col-lg-4">
                <img className="bannerimg" src={Vet} />
              </div>
            </div> */}
            <div className="ban_img_div">
              <PetMetFeaturesCarousel />
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
        <h2 className="mt-4" style={{paddingBottom: "20px"}}>GROOMING</h2>
        <div className="carousel-styling" style={{justifyContent: "center",paddingBottom: "40px"}} >
              <Carousel breakPoints={breakPoints}>
                                  
                  {groomer ? (
                  groomer.map((groom) =>
                     <item>
                  <SquareCard _id={groom.key} info={groom.details} title={groom.details.name} image={groom.details.url} size={groom.details.size} cost={groom.details.cost} mrp={groom.details.mrp}/> 
                  </item>
                  )
                 ) : (
                   <h5>grooming arriving</h5>
                 )
                 }
                 
              </Carousel>
        </div>
        <h2 className="mt-4" style={{paddingBottom: "20px"}}>CAT ESSENTIALS</h2>
        <div style={{justifyContent: "center",paddingBottom: "40px"}}>
                
              <Carousel breakPoints={breakPoints}>
              
                 {cats ? (
                  cats.map((ca) => <item>       
                  <SquareCard _id={ca.key} info={ca.details} title={ca.details.name} image={ca.details.url} size={ca.details.size} cost={ca.details.cost} mrp={ca.details.mrp}/>
                  </item>
                  )
                 ) : (
                   <h5>Cat Essentials arriving</h5>
                 )
                 }
               
                 
                
              </Carousel>
                
        </div>
        <h3 className="mt-4" style={{fontWeight: "bold",paddingBottom:"20px"}}>FEATURED CATEGORIES</h3>
        <div className="row justify-content-center" style={{paddingBottom: "30px"}}>
          {categoriess
            ? categoriess.map((cat) => (
                <Link to={"/ShopProducts/" + cat.name}>
                    <div className="col-10 col-lg-3 featuredCategories">
          
                <img src={cat.img} />
                <h4 className="mt-3 fcname">{cat.name}</h4>
            </div>
              
                </Link>
              ))
            : null}
        </div>
        <h2 className="mt-4" style={{paddingBottom: "20px"}}>FOOD</h2>
        <div style={{justifyContent: "center",paddingBottom: "40px"}}>
              <Carousel breakPoints={breakPoints}>
                
                  
      {food ? (
        food.map((food) => <item>
        <SquareCard _id={food.key} info={food.details} title={food.details.name} image={food.details.url} cost={food.details.cost} mrp={food.details.mrp} size={food.details.size} />
        </item>
        )
      ) : (
        <h5>food arriving</h5>
      )}
                
              </Carousel>
        </div>
  </div>
  );
};
export default DashboardClient;
