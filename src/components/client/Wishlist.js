import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import product1 from "../pictures/image 37.png";
import product2 from "../pictures/image 35.png";
import product3 from "../pictures/image 34.png";
import { FooterContainer } from "../footer/containers/footer";
import "./wishlist.css";

const WishlistComponent = () => {
  return (
    <div>
      <div className="wishlist">
        <div className="wishlistitem">
          <img
            className="wishlistitemimage"
            src={product1}
            alt="wishlistitem"
          />
          <h6 style={{ padding: " 10px 10px 0", color: "#282c3f" }}>
            Product Name <br /> Rs3456
          </h6>
          <hr />
          <button type="button" class="btn1 btn-link">
            MOVE TO BAG
          </button>
        </div>
        <div className="wishlistitem">
          <img
            className="wishlistitemimage"
            src={product2}
            alt="wishlistitem"
          />
          <h6 style={{ padding: " 10px 10px 0", color: "#282c3f" }}>
            Product Name <br /> Rs3456
          </h6>
          <hr />
          <button type="button" class="btn1 btn-link">
            MOVE TO BAG
          </button>
        </div>
        <div className="wishlistitem">
          <img
            className="wishlistitemimage"
            src={product3}
            alt="wishlistitem"
          />
          <h6 style={{ padding: " 10px 10px 0", color: "#282c3f" }}>
            Product Name <br /> Rs3456
          </h6>
          <hr />
          <button type="button" class="btn1 btn-link">
            MOVE TO BAG
          </button>
        </div>
      </div>
      <div style={{ marginTop: "300px" }}>
        <FooterContainer />
      </div>
    </div>
  );
};

export default function Wishlist() {
  const [usr, setUsr] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        alert("login required");
        window.location = "http://localhost:3000/Home";
      } else {
        setUsr(user);
      }
    });
  });
  return <div>{usr ? <WishlistComponent /> : null}</div>;
}
