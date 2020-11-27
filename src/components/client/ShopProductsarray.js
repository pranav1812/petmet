import React, { useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Dropdownfun from "./Dropdownfun";

function ShopProductsarray({ title }) {
  //title, type, id

  const [isDropdownOpen, setDropdownState] = useState(false);

  return (
    <div>
      <button
        className="newpagebutton"
        onClick={() => setDropdownState(!isDropdownOpen)}
      >
        {title} {isDropdownOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </button>
      {isDropdownOpen ? <Dropdownfun /> : null}
    </div>
  );
}

export default ShopProductsarray;
