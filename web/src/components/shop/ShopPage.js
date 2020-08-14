import React from "react";
import Carousel from "./Carousel";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconLabelButtons from "./Buttons";
import "./shoppage.css";
// var Rating = require("react-rating");
const ShopPage = () => {
  return (
    <div>
      <div className="carouselanddetails">
        <div>
          <Carousel />
        </div>
        <div className="details">
          <p style={{ fontSize: 20, fontWeight: 500 }}>DOG FOOD</p>
          <p style={{ fontSize: 19, fontWeight: 500 }}>Rs2000</p>
          {/* <p style={{ fontSize: 8 }}>
            <Rating />
          </p> */}
          <p style={{ fontSize: 14 }}>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit, sed do eiusmod tempor incididunt <br />
            ut labore et. <br />
            Vendor: Lereve <br />
            Availability: In stock (7 items)
            <br /> Product Type: T-Shirt
          </p>
          <IconLabelButtons />
        </div>
      </div>
      <ul>
        <li>DESCRIPTION</li>
        <li>ADDITIONAL INFORMATION</li>
        <li>SHIPPING</li>
        <li>REVIEWS</li>
      </ul>
      <p style={{ textAlign: "center" }}>
        Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus
        neque, id pulvinar odio lorem non turpis. Nullam sit amet enim.
        Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat
        volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra
        posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod
        ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh
        eget ipsum. Nam consectetuer. Sed aliquam, nunc eget euismod
        ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh
        eget ipsum. Nulla libero. Vivamus pharetra posuere sapien.
      </p>
      <h3 style={{ textAlign: "center" }}>RELATED PRODUCTS</h3>
      <div className="allrelated">
        <div className="onerelated">
          <img
            className="relatedproducts"
            src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
          />
          <p className="relateddetails">
            Rs300 <br />
            rubber bone
          </p>
          <Button
            className="relatedcartbutton"
            variant="contained"
            color="secondary"
            // className={classes.button}
            startIcon={<AddShoppingCartIcon />}
          >
            ADD TO CART
          </Button>
        </div>

        <div className="onerelated">
          <img
            className="relatedproducts"
            src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
          />
          <p className="relateddetails">
            Rs300 <br />
            rubber bone
          </p>
          <Button
            className="relatedcartbutton"
            variant="contained"
            color="secondary"
            // className={classes.button}
            startIcon={<AddShoppingCartIcon />}
          >
            ADD TO CART
          </Button>
        </div>

        <div className="onerelated">
          <img
            className="relatedproducts"
            src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
          />
          <p className="relateddetails">
            Rs300 <br />
            rubber bone
          </p>
          <Button
            variant="contained"
            color="secondary"
            // className={classes.button}
            startIcon={<AddShoppingCartIcon />}
          >
            ADD TO CART
          </Button>
        </div>

        <div className="onerelated">
          <img
            className="relatedproducts"
            src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
          />
          <p className="relateddetails">
            Rs300 <br />
            rubber bone
          </p>
          <Button
            variant="contained"
            color="secondary"
            // className={classes.button}
            startIcon={<AddShoppingCartIcon />}
          >
            ADD TO CART
          </Button>
        </div>

        <div className="onerelated">
          <img
            className="relatedproducts"
            src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
          />
          <p className="relateddetails">
            Rs300 <br />
            rubber bone
          </p>
          <Button
            variant="contained"
            color="secondary"
            // className={classes.button}
            startIcon={<AddShoppingCartIcon />}
          >
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ShopPage;
