import React from "react";
import Carousel from "react-elastic-carousel";
import "./bestsellers.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  { width: 240, itemsToShow: 5 },
];

const BestSellers = () => {
  return (
    <div className="bestsellers">
      <Carousel breakPoints={breakPoints}>
      </Carousel>
    </div>
  );
};

export default BestSellers;
