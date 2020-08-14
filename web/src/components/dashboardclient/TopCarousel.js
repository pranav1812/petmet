import React from "react";
import Carousel from "react-elastic-carousel";
import Products from "./Products.js";
import "./topcarousel.css";

const TopCarousel = () => {
  return (
    <div className="topcarousel">
      <Carousel>
        <Products>
          <img src="https://storage.sg.content-cdn.io/in-resources/e0c89b48-2067-4e06-a376-74220379b6d9/Images/userimages/DISCOUNT%20OFFER%20FB%20cover.jpg" />
        </Products>
        <Products>
          <img src="https://storage.sg.content-cdn.io/in-resources/e0c89b48-2067-4e06-a376-74220379b6d9/Images/userimages/DISCOUNT%20OFFER%20FB%20cover.jpg" />
        </Products>
        <Products>
          <img src="https://storage.sg.content-cdn.io/in-resources/e0c89b48-2067-4e06-a376-74220379b6d9/Images/userimages/DISCOUNT%20OFFER%20FB%20cover.jpg" />
        </Products>
        <Products>
          <img src="https://storage.sg.content-cdn.io/in-resources/e0c89b48-2067-4e06-a376-74220379b6d9/Images/userimages/DISCOUNT%20OFFER%20FB%20cover.jpg" />
        </Products>
      </Carousel>
    </div>
  );
};

export default TopCarousel;
