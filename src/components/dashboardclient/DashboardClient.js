import React from "react";
import RoundCard from "./RoundCard";
import Navbar from "../../navbar.js";
import "./dashboard.css";
import TopCarousel from "./TopCarousel";
import BestSellers from "./BestSellers.js";
import AppBar from "@material-ui/core/AppBar";
import { FooterContainer } from "../footer/containers/footer";
// import catessentials from "../pictures/image 3.png";
// import harness from "../image 4.png";
// import grooming from "../image 5.png";
// import food from "../image 6.png";

const DashboardClient = () => {
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
        <div className="cards">
          <RoundCard title="TREATS" />
          <RoundCard title="CLOTHING" />
          <RoundCard title="LITTER MANAGEMENT" />
          <RoundCard title="FOOD" />
          <RoundCard title="GROOMING"  />
          <RoundCard title="TOYS" />
          <RoundCard title="ACCESSORIES" />
          <RoundCard title="CHEWSS"  />
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
