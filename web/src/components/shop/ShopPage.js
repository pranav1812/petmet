import React from "react";
import Carousel from "./Carousel";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Rating from "@material-ui/lab/Rating";
import IconLabelButtons from "./Buttons";
import "./shoppage.css";
import BestSellers from "../dashboardclient/BestSellers";

const ShopPage = () => {
  const [value, setValue] = React.useState(2);
  return (
    <div>
      <div className="carouselanddetails">
        <div>
          <Carousel />
        </div>
        <div className="details">
          <p
            className="openedproductname"
            style={{ fontSize: 20, fontWeight: 500, marginBottom: "5px" }}
          >
            DOG FOOD
          </p>
          <p
            className="openedproductname"
            style={{ fontSize: 19, fontWeight: 500, marginBottom: "10px" }}
          >
            Rs2000
          </p>
          <hr style={{ color: "rgba(0,0,0,0.1" }} />

          <Rating
            style={{ marginTop: "20px" }}
            name="read-only"
            value={value}
            readOnly
          />
          <p style={{ fontSize: 14, marginTop: "20px" }}>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit, sed do eiusmod tempor incididunt <br />
            ut labore et.
            <br /> <div>Product Type:</div>
            <ul className="a">
              <li>T-Shirt Product Details</li>

              <li>Leather upper Pull-up tabs</li>

              <li>3-month warranty against manufacturing defects</li>

              <li>Lace Fastening Rubber sole</li>

              <li>Wipe with a clean, dry cloth when needed </li>
            </ul>
            <div style={{ display: "inline" }}>
              <div>Product Code:</div> 460220300057{" "}
            </div>
          </p>
          <IconLabelButtons />
        </div>
      </div>
      <hr style={{ color: "rgba(0,0,0,0.1" }} />
      <div style={{ paddingBottom: "30px", paddingTop: "16px" }}>
        <ul className="b">
          <li className="listb">DESCRIPTION</li>
          <li className="listb">ADDITIONAL INFORMATION</li>
          <li className="listb">SHIPPING</li>
          <li className="listb">REVIEWS</li>
          <hr style={{ color: "rgba(0,0,0,0.1" }} />
        </ul>
        <p style={{ textAlign: "center" }}>
          Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing
          elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus
          neque, id pulvinar odio lorem non turpis. Nullam sit amet enim.
          Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat
          volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus
          pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget
          euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum
          enim nibh eget ipsum. Nam consectetuer. Sed aliquam, nunc eget euismod
          ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim
          nibh eget ipsum. Nulla libero. Vivamus pharetra posuere sapien.
        </p>
      </div>
      <hr style={{ color: "rgba(0,0,0,0.1" }} />
      <h3
        className="heading"
        style={{ textAlign: "center", paddingTop: "16px" }}
      >
        RELATED PRODUCTS
      </h3>
      <div>
        <BestSellers />
      </div>
    </div>
  );
};
export default ShopPage;
