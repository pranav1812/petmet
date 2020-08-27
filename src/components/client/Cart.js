import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import "./cart.css";
import product1 from "../pictures/image 37.png";
import product2 from "../pictures/image 35.png";
import product3 from "../pictures/image 34.png";

const home= window.location.protocol + "//" + window.location.host + "/" +'Home/'

const CartComponent = () => {
  return (
    <div>
      <div className="bothflexbox">
        <div className="flexbox1">
          {/* ------------- */}
          <div className="available offers">
            <hr />
            <h6 className="availableoffers">Available Offers</h6>
            <p>
              10% Instant Discount with Federal Bank Debit Cards on a min spend
              of Rs 2,000. TCA
            </p>
            {/* ....................dropdown----------------------- */}
            <div className="nav-item dropdown show">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                SHOW MORE
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
            <hr />
            {/* ...................drop over.................... */}
          </div>
          {/* .............................. */}
          <div className="heading">
            <h6 style={{ fontWeight: 600 }}>
              MY SHOPPING BAG ( 1 ITEM)
              <br /> <div style={{ color: "#FF5352" }}>TOTAL: Rs 345 </div>
            </h6>
          </div>
          {/* .................... */}
          <div style={{ backgroundColor: "white" }} className="cartproductcard">
            <p>
              <img
                className="cartproductimage"
                src={product1}
                alt="productpicture"
              />
              <div style={{ marginLeft: "140px" }}>
                <h4 style={{ fontWeight: "500" }}>PRODUCT NAME</h4>
                <p>Special food for dog designed for summer season</p>
                <p>Rs 345</p>
              </div>
            </p>
            <div className="sizeandqty">
              {/* ...........select size........... */}
              <div
                style={{ padding: "35px" }}
                className="nav-item dropdown show"
              >
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
            <button
              style={{ alignContent: "right" }}
              type="button"
              class="btn btnapply"
            >
              Move to wishlist
            </button>
          </div>
        </div>
        <hr />
        {/* .............................. */}
        <div className="flexbox2">
          <hr />
          <div className="coupons">
            <h6 className="availableoffers">Apply coupons</h6>
            <button type="button" class="btn btnapply">
              APPLY
            </button>
            <hr />
          </div>
          {/* ...................................... */}
          <div className="pricedetails">
            <h6 className="availableoffers">PRICE DETAILS</h6>
            <ul>
              <span>
                <li>
                  <p>Bag Total Rs456</p>
                </li>
              </span>
              <li>
                <p> Bag Discount Rs456</p>
              </li>
              <li>
                <p>Coupon Discount Rs456</p>
              </li>
              <li>
                <p> Order Total Rs456</p>
              </li>
              <li>
                <p> Delivery Charge Rs456</p>
              </li>
              <hr />
              <li>
                <p> TOTAL Rs456</p>
              </li>
            </ul>
            <button
              type="button"
              style={{ backgroundColor: "#36A9CC" }}
              class="btn btn-secondary"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
        {/* ................................... */}
      </div>
    </div>
  );
};

export default function Cart() {
  const [usr, setUsr] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        alert("login required");
        window.location = home;
      } else {
        setUsr(user);
      }
    });
  });
  return <div>{usr ? <CartComponent /> : null}</div>;
}
