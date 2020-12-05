import React from 'react';
import SquareCard from './SquareCard';
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 240, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
  ];
  
const FeaturedCarousel = () => {
    return ( 
        <div>
            <h2 className="mt-4" style={{ paddingBottom: "20px",fontWeight:"bold" }}>
                TOP FEATURED
            </h2>
            <div
                className="carousel-styling"
                style={{ justifyContent: "center", paddingBottom: "40px" }}
            >
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
}
 
export default FeaturedCarousel;