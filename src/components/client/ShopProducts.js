import React, { useState, useEffect } from "react";
import FoodCategory from "../pictures/image 15.png";
import Arrow from "../pictures/Vector.png";
import { db, auth } from "../../firebase";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";
import SquareCard from "../dashboardclient/SquareCard";
import "./shopproducts.css";
import { useParams } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import ContinuousSlider from "./Slider";
import ShopProductsarray from "./ShopProductsarray";
import Dropdownfun from "./Dropdownfun";

const ShopProducts = () => {
  const [products, setProducts] = useState(null);
  const [brandFilter, setBrandFilter] = useState(null);
  const [costFilter, setCostFilter] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCost, setSelectedCost] = useState(null);
  const { subComponent } = useParams();
  useEffect(() => {
    db.collection("items")
      .doc(subComponent)
      .collection("products")
      .get()
      .then((docs) => {
        var temp = [];
        docs.forEach((doc) => {
          temp.push({ ...doc.data(), key: doc.id });
        });

        setProducts(temp);
      });

    db.collection("homepage")
      .doc("filter")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setCostFilter(doc.data().cost);
          setBrandFilter(doc.data().brand);
        }
      });
  }, []);

  const applyFilter = () => {
    // alert('qwerty')
    if (products) {
      var temp = [];
      products.forEach((pro) => {
        if (pro.filterInfo) {
          if (
            Number(pro.filterInfo.cost) < selectedCost && selectedBrands.includes(pro.filterInfo.brand)) {
            temp.push(pro);
          }
          
        }
      });
      console.log(temp)
      setProducts(temp);
    }
  };

  const addToBrands = (val) => {
    var temp = selectedBrands;
    if (selectedBrands.includes(val)) {
      temp.splice(temp.indexOf(val), 1);
    } else {
      temp.push(val);
    }
    console.log(temp);
    console.log(selectedCost);
    setSelectedBrands(temp);
  };

  const [dropdownvar2, setDropdownvar2] = useState(false);
  const dropdowndata2 = () => {
    if (dropdownvar2 == false) {
      setDropdownvar2(true);
    } else {
      setDropdownvar2(false);
    }
  };

  const Dropdownfun2 = () => {
    return (
      <ul className="ulofsort">
        <li style={{ marginBottom: "4px" }}>Recommended</li>
        <li style={{ marginBottom: "4px" }}>Price(low to high)</li>
        <li style={{ marginBottom: "4px" }}>Price(high to low)</li>
      </ul>
    );
  };

  const linkToHome = () => {
    window.location =
      window.location.protocol + "//" + window.location.host + "/Home";
  };
  const linkTosubComponent = () => {
    window.location = window.location.href;
  };

  const listarray = [1, 2];
  const [isFilterOpen, setFilterState] = useState(false);

  return (
    <div>
      <div className="row pathontop ml-3">
        <p onClick={linkToHome} className="linkToHome">
          Home
        </p>
        <p onClick={linkTosubComponent} className="linkToHome">
          &gt; {subComponent}
        </p>
      </div>
      <span>
        <div className="products_bothflex">
          <div className="products_leftflex products_leftflexdisplay">
            <h5>BRAND</h5>
            <ul>
              {brandFilter
                ? brandFilter.map((brand) => (
                    <li>
                      <input
                        onClick={(e) => {
                          addToBrands(e.target.value);
                        }}
                        style={{ marginRight: "14px" }}
                        type="checkbox"
                        value={brand}
                      />
                      {brand}
                    </li>
                  ))
                : null}
            </ul>
            <h5>PRICE</h5>
            <ul>
              {costFilter
                ? costFilter.map((cost) => (
                    <li>
                      <input
                        name="costtt"
                        value={cost}
                        type="radio"
                        onClick={() => {
                          setSelectedCost(Number(cost));
                        }}
                        style={{ marginRight: "14px" }}
                      />
                      {cost}
                    </li>
                  ))
                : null}
            </ul>
            <button className="newapplyy" onClick={applyFilter}>
              Apply
            </button>
          </div>

          <div className="products_rightflex">
            <div className="start_rightflex">
              <p className="dogfoodtag">{subComponent}</p>
              <div className="filterbuttonflex">
                <button
                  onClick={() => setFilterState(!isFilterOpen)}
                  className="shopproducts_filterbutton ddropdown"
                >
                  FILTER
                </button>
                {isFilterOpen ? (
                  <div>
                    <div>
                      <h5>BRAND</h5>
                      <ul>
                        {brandFilter
                          ? brandFilter.map((brand) => (
                              <li>
                                <input
                                  onClick={(e) => {
                                    addToBrands(e.target.value);
                                  }}
                                  style={{ marginRight: "14px" }}
                                  type="checkbox"
                                  value={brand}
                                />
                                {brand}
                              </li>
                            ))
                          : null}
                      </ul>
                      <h5>PRICE</h5>
                      <ul>
                        {costFilter
                          ? costFilter.map((cost) => (
                              <li>
                                <input
                                  name="costtt"
                                  value={cost}
                                  type="radio"
                                  onClick={() => {
                                    setSelectedCost(cost);
                                  }}
                                  style={{ marginRight: "14px" }}
                                />
                                {cost}
                              </li>
                            ))
                          : null}
                      </ul>
                      <button className="newapplyy" onClick={applyFilter}>
                        Apply
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>

              {/* <div className="start_rightflex_subcolumn">
                <button
                  className="ddropdown bigscreensort"
                  onClick={dropdowndata2}
                >
                  SORT BY: Recommended <ArrowDropDownIcon />
                </button>
                <button
                  className="ddropdown smallscreensort"
                  onClick={dropdowndata2}
                >
                  SORT BY:
                </button>

                {dropdownvar2 && <Dropdownfun2 />}
              </div> */}
            </div>
            <div>
              <p className="showingresults">Showing 1-12 of 130 results</p>
            </div>
            <div className="products_rightflex_cardflex">
              {products
                ? products.map((pro) => (
                    <div>
                      <SquareCard
                        title={pro.details.name}
                        size={pro.details.size}
                        cost={pro.details.cost}
                        mrp={pro.details.mrp}
                        _id={pro.key}
                        info={pro.details}
                        image={pro.details.url}
                        style={{ margin: "31px" }}
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};

export default ShopProducts;
