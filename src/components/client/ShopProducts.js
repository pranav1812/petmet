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

const ShopProducts = () => {
  const [products, setProducts] = useState(null);
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
        console.log(temp.length);
      });
  }, []);
  const [dropdownvar, setDropdownvar] = useState(false);
  const dropdowndata = () => {
    if (dropdownvar == false) {
      setDropdownvar(true);
    } else {
      setDropdownvar(false);
    }
  };
  const Dropdownfun = () => {
    return (
      <ul>
        <li>
          <input type="checkbox" />
          Acana
        </li>
        <br />
        <li>
          <input type="checkbox" />
          Arden Grange
        </li>
        <br />
        <li>
          <input type="checkbox" />
          Acana
        </li>
        <br />
        <li>
          <input type="checkbox" />
          Arden Grange
        </li>
        <br />
        <li>
          <input type="checkbox" />
          Acanaa
        </li>
        <br />
        <li>
          <input type="checkbox" />
          Arden Gargee
        </li>
        <br />
        <li>
          <input type="checkbox" />
          Acana
        </li>
        <br />
        <li>
          <input type="checkbox" />
          Ardenr
        </li>
        <br />
      </ul>
    );
  };
  return (
    <div>
      Home > Dog Essentials
      <span>
        <div className="products_bothflex">
          <div className="products_leftflex">
            <p>PRICE</p>
            <hr />

            <button onClick={dropdowndata}>
              BRANDS <ArrowDropDownIcon />
            </button>

            {dropdownvar && <Dropdownfun />}

            <hr />
            <button onClick={dropdowndata}>
              PRODUCT TYPE <ArrowDropDownIcon />
            </button>

            {dropdownvar && <Dropdownfun />}

            <hr />
            <button onClick={dropdowndata}>
              BREED <ArrowDropDownIcon />
            </button>

            {dropdownvar && <Dropdownfun />}

            <hr />
            <button onClick={dropdowndata}>
              LIFE STAGE <ArrowDropDownIcon />
            </button>

            {dropdownvar && <Dropdownfun />}

            <hr />
            <button onClick={dropdowndata}>
              LIFE STAGE <ArrowDropDownIcon />
            </button>

            {dropdownvar && <Dropdownfun />}

            <hr />
          </div>
          <div className="products_rightflex">
            <div className="start_rightflex">
              <p>Dog Food</p>
              <Dropdown className="ddropdown">
                <Dropdown.Toggle id="dropdown-basic">
                  SORT BY: Recommended
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/* Showing 1-12 of 130 results */}
            </div>
            {products
              ? products.map((pro) => (
                  <div>
                    <Link to={"/ShopPage/" + subComponent + "/" + pro.key}>
                      <SquareCard style={{ margin: "31px" }} />
                    </Link>
                    {/* <Link to={"/ShopPage/" + subComponent + "/" + pro.key}>
                    <SquareCard style={{ margin: "31px" }} />
                  </Link>
                  <Link to={"/ShopPage/" + subComponent + "/" + pro.key}>
                    <SquareCard style={{ margin: "31px" }} />
                  </Link> */}
                  </div>
                ))
              : null}
          </div>
        </div>
      </span>
    </div> /*{" "}
        <div className="thumb">
          <Link to={"/ShopPage/" + +"/" + pro.key}>
            <div className="personalthumb">
              <div>
                <img
                  // style={{ backgroundColor: "#f5f5f5" }}
                  className="dishpicture"
                  src={pro.details.url}
                />
              </div>
              <p className="dishnames">{pro.details.name}</p>

              <span>
                <button type="button" className="optionsbutton">
                  {pro.details.size}
                </button>
              </span>
              <span>
                <div className="priceofproduct">₹{pro.details.cost} </div>
              </span>
            </div>
          </Link>
        </div>{" "}
        */
    // ................................................................... //{" "}
    /* <div className="bodyleavingnav">
        /*{" "}
        <span>      
          <hr />
          <div
            // style={{ margin: "20px" }}
            class="btn-group"
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <button type="button" class="btn btn-success">
              Filter
            </button>
            <div class="btn-group" role="group">
              <button
                id="btnGroupDrop2"
                type="button"
                class="btn btn-success dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></button>
              <div class="dropdown-menu" aria-labelledby="btnGroupDrop2">
                <a class="dropdown-item" href="#">
                  Dropdown link
                </a>
                <a class="dropdown-item" href="#">
                  Dropdown link
                </a>
              </div>
            </div>
          </div>

          <div
            class="btn-group"
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <button type="button" class="btn btn-success">
              Sort
            </button>
            <div class="btn-group" role="group">
              <button
                id="btnGroupDrop2"
                type="button"
                class="btn btn-success dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></button>
              <div class="dropdown-menu" aria-labelledby="btnGroupDrop2">
                <a class="dropdown-item" href="#">
                  Dropdown link
                </a>
                <a class="dropdown-item" href="#">
                  Dropdown link
                </a>
              </div>
            </div>
          </div>
        </span>{" "}
        */ //{" "}
    // </div>

    // ................................................................................
  );
};

export default ShopProducts;
