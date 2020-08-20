import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import { FooterContainer } from "../footer/containers/footer";
import "./cart.css";
import product1 from "../pictures/image 37.png";
import product2 from "../pictures/image 35.png";
import product3 from "../pictures/image 34.png";
const CartComponent = () => {
  return (
    <div>
      <div className="bothflexbox">
        <div className="flexbox1">
          {/* ------------- */}
          <div className="available offers">
            <hr />
            <h6 style={{ fontWeight: "500 !important" }}>Available Offers</h6>
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
            <h6 style={{ fontWeight: 500 }}>
              MY SHOPPING BAG ( 1 ITEM)
              <br /> TOTAL: Rs 345
            </h6>
          </div>
          {/* .................... */}
          <div className="cartproductcard">
            <p>
              <img
                className="cartproductimage"
                src={product1}
                alt="productpicture"
              />
              <h4>PRODUCT NAME</h4>
              <p>Special food for dog designed for summer season</p>
              <p>Rs 345</p>
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
              Move to wishlist
            </button>
          </div>
        </div>
        <hr />
        {/* .............................. */}
        <div className="flexbox2">
          <hr />
          <div className="coupons">
            <h6>Apply coupons</h6>
            <button type="button" class="btn btnapply">
              APPLY
            </button>
            <hr />
          </div>
          {/* ...................................... */}
          <div className="pricedetails">
            <h6>PRICE DETAILS</h6>
            <ul>
              <li style={{ display: "inline" }}>
                Bag Total <p className="price">Rs456</p>
              </li>
              <li>
                Bag Discount <p className="price">Rs456</p>
              </li>
              <li>
                Coupon Discount <p className="price">Rs456</p>
              </li>
              <li>
                <p> Order Total</p> <p className="price">Rs456</p>
              </li>
              <li>
                Delivery Charge <p className="price">Rs456</p>
              </li>
              <hr />
              <li>
                TOTAL <p className="price">Rs456</p>
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
      <div style={{ marginTop: "300px" }}>
        <FooterContainer />
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
        window.location = "http://localhost:3000/Home";
      } else {
        setUsr(user);
      }
    });
  });
  return <div>{usr ? <CartComponent /> : null}</div>;
}
