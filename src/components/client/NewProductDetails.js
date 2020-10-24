import React from "react";

function NewProductDetails() {
  return (
    <div>
      <div className="productDetails_title">
        <p>HUFT Drizzle Buddy Raincoat- Purpule</p>
        <p>Available in multiple colors</p>
      </div>
      <div className="productDetails_flex1">
        <img src={} alt="imageofproduct" />
        <img src={} alt="imageofproduct" />
        <img src={} alt="imageofproduct" />
        <img src={} alt="imageofproduct" />
        <img src={} alt="imageofproduct" />
        <img src={} alt="imageofproduct" />
      </div>
      <div className="productDetails_flex2">
        <img src={} alt="imageofproduct" />
      </div>
      <div className="productDetails_flex3">
        <p>
          The Heads Up For Tails Yummy In My Tummy biscuits makes treat time
          both nutritious and delicious. loaded with rich flavours from
          farm-fresh chicken and other high-quality human-grade ingredients,...
        </p>
        <p>Size:</p>
        <span>
          <button>320gm</button>
          <button>320gm</button>
          <button>320gm</button>
          <button>320gm</button>
        </span>
        <button>Add to Cart</button>
        <p>Check if we Deliver to your Pincode</p>
        <span>
          <input type="text" placeholder="ENTER PINCODE" />
          <button>CHECK</button>
        </span>
      </div>
      <div className="productDetails_description_flex1">
        <p>Features:</p>
        <ul>
          <li>Cookies for dogs</li>
          <li> Suitable for all dogs</li>
          <li> Made from rice and chickpea flour</li>
          <li> Made with real chicken</li>
          <li> Treats should always be given in moderation</li>
          <li> Always have fresh water available for your pet</li>
          <li>
            Never feed above recommended quantities unless prescribed by a vet
          </li>
          <li> Always check the ingredient label for possible allerg</li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="productDetails_description_flex2">
        <img src={} alt="hry" />
      </div>
    </div>
  );
}

export default NewProductDetails;
