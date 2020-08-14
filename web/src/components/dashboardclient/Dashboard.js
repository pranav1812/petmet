import React from "react";
import RoundCard from "./RoundCard";
import Navbar from "../../navbar.js";
import "./dashboard.css";
import TopCarousel from "./TopCarousel";
import BestSellers from "./BestSellers.js";
import AppBar from "@material-ui/core/AppBar";

const Dashboard = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="carouselandcards">
        <div className="carousel" style={{ marginTop: "100px" }}>
          <TopCarousel />
        </div>
        <h4 className="topbanner">
          Shop for Rs2000 and get a voucher worth Rs345
        </h4>

        <div className="cards">
          <RoundCard
            title="TREATS"
            image="https://backend.petsutra.com/app/uploads/31-05-19/5cf117d1bc675.png"
          />
          <RoundCard
            title="CLOTHING"
            image="https://backend.petsutra.com/app/uploads/24-06-20/5ef34e7665928.png"
          />
          <RoundCard
            title="LITTER MANAGEMENT"
            image="https://backend.petsutra.com/app/uploads/31-05-19/5cf117915fff6.png"
          />
          <RoundCard
            title="FOOD"
            image="https://backend.petsutra.com/app/uploads/31-05-19/5cf116df043d3.png"
          />
          <RoundCard
            title="GROOMING"
            image="https://backend.petsutra.com/app/uploads/31-05-19/5cf1173c93968.png"
          />
          <RoundCard
            title="TOYS"
            image="https://backend.petsutra.com/app/uploads/31-05-19/5cf117d1bc675.png"
          />
          <RoundCard
            title="ACCESSORIES"
            image="https://backend.petsutra.com/app/uploads/31-05-19/5cf1170aad1c8.png"
          />
          <RoundCard
            title="CHEWSS"
            image="https://backend.petsutra.com/app/uploads/31-05-19/5cf117d1bc675.png"
          />
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
      </div>
    </div>
  );
};
export default Dashboard;
