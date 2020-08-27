import React from "react";
import Carousel from "react-elastic-carousel";
import Products from "./Products.js";
import "./topcarousel.css";

// const styles = {
//   root: {
//     padding: "0 !important",
//   },
// };
const TopCarousel = () => {
  return (
    // <div className={styles.root} className="topcarousel">
    //   <Carousel>
    //     <Products>
    //       <img src="https://storage.sg.content-cdn.io/in-resources/e0c89b48-2067-4e06-a376-74220379b6d9/Images/userimages/DISCOUNT%20OFFER%20FB%20cover.jpg" />
    //     </Products>
    //     <Products>
    //       <img src="https://storage.sg.content-cdn.io/in-resources/e0c89b48-2067-4e06-a376-74220379b6d9/Images/userimages/DISCOUNT%20OFFER%20FB%20cover.jpg" />
    //     </Products>
    //     <Products>
    //       <img src="https://storage.sg.content-cdn.io/in-resources/e0c89b48-2067-4e06-a376-74220379b6d9/Images/userimages/DISCOUNT%20OFFER%20FB%20cover.jpg" />
    //     </Products>
    //     <Products>
    //       <img src="https://storage.sg.content-cdn.io/in-resources/e0c89b48-2067-4e06-a376-74220379b6d9/Images/userimages/DISCOUNT%20OFFER%20FB%20cover.jpg" />
    //     </Products>
    //   </Carousel>
    // </div>
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel carouseltop slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://storage.sg.content-cdn.io/in-resources/e0c89b48-2067-4e06-a376-74220379b6d9/Images/userimages/DISCOUNT%20OFFER%20FB%20cover.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://storage.sg.content-cdn.io/in-resources/e0c89b48-2067-4e06-a376-74220379b6d9/Images/userimages/DISCOUNT%20OFFER%20FB%20cover.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://storage.sg.content-cdn.io/in-resources/e0c89b48-2067-4e06-a376-74220379b6d9/Images/userimages/DISCOUNT%20OFFER%20FB%20cover.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCarousel;
