import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import product1 from "../pictures/image 37.png";
import product2 from "../pictures/image 35.png";
import product3 from "../pictures/image 34.png";
import { FooterContainer } from "../footer/containers/footer";
// import "./wishlist.css";
import "./cart.css";

const WishlistComponent = () => {
  return (
    <div className="wishlistpage">
      {/* <div className="wishlist">
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
      </div> */}

      <div style={{ backgroundColor: "white" }} className="cartproductcard">
        <p>
          <img
            className="cartproductimage"
            src={product1}
            alt="productpicture"
          />
          <div style={{ marginLeft: "140px", color: "black" }}>
            <h4 style={{ fontWeight: "500" }}>PRODUCT NAME</h4>
            <p>Special food for dog designed for summer season</p>
            <p>Rs 345</p>
          </div>
        </p>
        <div className="sizeandqty">
          {/* ...........select size........... */}
          <div className="nav-item dropdown show">
            <a
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              SIZE
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                BLANKKKKKK
              </a>
              <a className="dropdown-item" href="#">
                BLANKKK
              </a>
              <a className="dropdown-item" href="#">
                BLANKK
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                BLANKKKKK
              </a>
            </div>
          </div>
          {/* ............select size over....... */}
          <div className="nav-item dropdown show">
            <a
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              QTY
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                BLANKKKKKK
              </a>
              <a className="dropdown-item" href="#">
                BLANKKK
              </a>
              <a className="dropdown-item" href="#">
                BLANKK
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                BLANKKKKK
              </a>
            </div>
          </div>

          {/* ..................QTY OVERR.......... */}
        </div>
        <br />
        <hr />
        <button type="button" class="btn btnapply">
          Remove
        </button>
        <button type="button" class="btn btnapply">
          Buy Now
        </button>
      </div>
      {/* ................................second card..................................... */}
      <div style={{ backgroundColor: "white" }} className="cartproductcard">
        <p>
          <img
            className="cartproductimage"
            src={product1}
            alt="productpicture"
          />
          <div style={{ marginLeft: "140px", color: "black" }}>
            <h4 style={{ fontWeight: "500" }}>PRODUCT NAME</h4>
            <p>Special food for dog designed for summer season</p>
            <p>Rs 345</p>
          </div>
        </p>
        <div className="sizeandqty">
          {/* ...........select size........... */}
          <div className="nav-item dropdown show">
            <a
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              SIZE
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                BLANKKKKKK
              </a>
              <a className="dropdown-item" href="#">
                BLANKKK
              </a>
              <a className="dropdown-item" href="#">
                BLANKK
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                BLANKKKKK
              </a>
            </div>
          </div>
          {/* ............select size over....... */}
          <div className="nav-item dropdown show">
            <a
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              QTY
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                BLANKKKKKK
              </a>
              <a className="dropdown-item" href="#">
                BLANKKK
              </a>
              <a className="dropdown-item" href="#">
                BLANKK
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                BLANKKKKK
              </a>
            </div>
          </div>

          {/* ..................QTY OVERR.......... */}
        </div>
        <br />
        <hr />
        <button type="button" class="btn btnapply">
          Remove
        </button>
        <button type="button" class="btn btnapply">
          Buy Now
        </button>
      </div>
      {/* <div style={{ marginTop: "300px" }}>
        <FooterContainer />
      </div> */}
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
