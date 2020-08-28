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
        className="carousel carouseltop slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://storage.sg.content-cdn.io/in-resources/e0c89b48-2067-4e06-a376-74220379b6d9/Images/userimages/DISCOUNT%20OFFER%20FB%20cover.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://storage.sg.content-cdn.io/in-resources/e0c89b48-2067-4e06-a376-74220379b6d9/Images/userimages/DISCOUNT%20OFFER%20FB%20cover.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://storage.sg.content-cdn.io/in-resources/e0c89b48-2067-4e06-a376-74220379b6d9/Images/userimages/DISCOUNT%20OFFER%20FB%20cover.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default TopCarousel;
