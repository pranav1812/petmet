import React from "react";
import FoodCategory from "../pictures/image 15.png";
import "./shopproducts.css";
import Arrow from "../pictures/Vector.png";
import Dashboard from "./Dashboard";

const ShopProducts = () => {
  return (
    <div>
      <div className="bodyleavingnav">
        <p>Home/Shop/Pet Food</p>
        <span>
          <hr />
          <div
            style={{ margin: "20px" }}
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
          {/* ..........................second button................... */}
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
        </span>
        <div className="thumb">
          <div className="personalthumb">
            <div>
              <img
                style={{ backgroundColor: "#f5f5f5" }}
                className="dishpicture"
                src={FoodCategory}
              />
            </div>
            <p className="dishnames">HUFT Drizzle Chicken Liver Dog Biscuits</p>

            <span>
              <button type="button" className="optionsbutton">
                320 gm
              </button>
              <button type="button" className="optionsbutton">
                800 gm
              </button>
            </span>
            <span>
              <div className="priceofproduct">₹250</div>
              <img className="arrow" src={Arrow} />
            </span>
          </div>
          <div className="personalthumb">
            <div>
              <img
                style={{ backgroundColor: "#f5f5f5" }}
                className="dishpicture"
                src={FoodCategory}
              />
            </div>
            <p className="dishnames">HUFT Drizzle Chicken Liver Dog Biscuits</p>

            <span>
              <button type="button" className="optionsbutton">
                320 gm
              </button>
              <button type="button" className="optionsbutton">
                800 gm
              </button>
            </span>
            <span>
              <div className="priceofproduct">₹250</div>
              <img className="arrow" src={Arrow} />
            </span>
          </div>

          <div className="personalthumb">
            <div>
              <img
                style={{ backgroundColor: "#f5f5f5" }}
                className="dishpicture"
                src={FoodCategory}
              />
            </div>
            <p className="dishnames">HUFT Drizzle Chicken Liver Dog Biscuits</p>

            <span>
              <button type="button" className="optionsbutton">
                320 gm
              </button>
              <button type="button" className="optionsbutton">
                800 gm
              </button>
            </span>
            <span>
              <div className="priceofproduct">₹250</div>
              <img className="arrow" src={Arrow} />
            </span>
          </div>

          <div className="personalthumb">
            <div>
              <img
                style={{ backgroundColor: "#f5f5f5" }}
                className="dishpicture"
                src={FoodCategory}
              />
            </div>
            <p className="dishnames">HUFT Drizzle Chicken Liver Dog Biscuits</p>

            <span>
              <button type="button" className="optionsbutton">
                320 gm
              </button>
              <button type="button" className="optionsbutton">
                800 gm
              </button>
            </span>
            <span>
              <div className="priceofproduct">₹250</div>
              <img className="arrow" src={Arrow} />
            </span>
          </div>

          <div className="personalthumb">
            <div>
              <img
                style={{ backgroundColor: "#f5f5f5" }}
                className="dishpicture"
                src={FoodCategory}
              />
            </div>
            <p className="dishnames">HUFT Drizzle Chicken Liver Dog Biscuits</p>

            <span>
              <button type="button" className="optionsbutton">
                320 gm
              </button>
              <button type="button" className="optionsbutton">
                800 gm
              </button>
            </span>
            <span>
              <div className="priceofproduct">₹250</div>
              <img className="arrow" src={Arrow} />
            </span>
          </div>
          <div className="personalthumb">
            <div>
              <img
                style={{ backgroundColor: "#f5f5f5" }}
                className="dishpicture"
                src={FoodCategory}
              />
            </div>
            <p className="dishnames">HUFT Drizzle Chicken Liver Dog Biscuits</p>

            <span>
              <button type="button" className="optionsbutton">
                320 gm
              </button>
              <button type="button" className="optionsbutton">
                800 gm
              </button>
            </span>
            <span>
              <div className="priceofproduct">₹250</div>
              <img className="arrow" src={Arrow} />
            </span>
          </div>

          <div className="personalthumb">
            <div>
              <img
                style={{ backgroundColor: "#f5f5f5" }}
                className="dishpicture"
                src={FoodCategory}
              />
            </div>
            <p className="dishnames">HUFT Drizzle Chicken Liver Dog Biscuits</p>

            <span>
              <button type="button" className="optionsbutton">
                320 gm
              </button>
              <button type="button" className="optionsbutton">
                800 gm
              </button>
            </span>
            <span>
              <div className="priceofproduct">₹250</div>
              <img className="arrow" src={Arrow} />
            </span>
          </div>

          <div className="personalthumb">
            <div>
              <img
                style={{ backgroundColor: "#f5f5f5" }}
                className="dishpicture"
                src={FoodCategory}
              />
            </div>
            <p className="dishnames">HUFT Drizzle Chicken Liver Dog Biscuits</p>

            <span>
              <button type="button" className="optionsbutton">
                320 gm
              </button>
              <button type="button" className="optionsbutton">
                800 gm
              </button>
            </span>
            <span>
              <div className="priceofproduct">₹250</div>
              <img className="arrow" src={Arrow} />
            </span>
          </div>
          <div className="personalthumb">
            <div>
              <img
                style={{ backgroundColor: "#f5f5f5" }}
                className="dishpicture"
                src={FoodCategory}
              />
            </div>
            <p className="dishnames">HUFT Drizzle Chicken Liver Dog Biscuits</p>

            <span>
              <button type="button" className="optionsbutton">
                320 gm
              </button>
              <button type="button" className="optionsbutton">
                800 gm
              </button>
            </span>
            <span>
              <div className="priceofproduct">₹250</div>
              <img className="arrow" src={Arrow} />
            </span>
          </div>

          <div className="personalthumb">
            <div>
              <img
                style={{ backgroundColor: "#f5f5f5" }}
                className="dishpicture"
                src={FoodCategory}
              />
            </div>
            <p className="dishnames">HUFT Drizzle Chicken Liver Dog Biscuits</p>

            <span>
              <button type="button" className="optionsbutton">
                320 gm
              </button>
              <button type="button" className="optionsbutton">
                800 gm
              </button>
            </span>
            <span>
              <div className="priceofproduct">₹250</div>
              <img className="arrow" src={Arrow} />
            </span>
          </div>

          <div className="personalthumb">
            <div>
              <img
                style={{ backgroundColor: "#f5f5f5" }}
                className="dishpicture"
                src={FoodCategory}
              />
            </div>
            <p className="dishnames">HUFT Drizzle Chicken Liver Dog Biscuits</p>

            <span>
              <button type="button" className="optionsbutton">
                320 gm
              </button>
              <button type="button" className="optionsbutton">
                800 gm
              </button>
            </span>
            <span>
              <div className="priceofproduct">₹250</div>
              <img className="arrow" src={Arrow} />
            </span>
          </div>
          <div className="personalthumb">
            <div>
              <img
                style={{ backgroundColor: "#f5f5f5" }}
                className="dishpicture"
                src={FoodCategory}
              />
            </div>
            <p className="dishnames">HUFT Drizzle Chicken Liver Dog Biscuits</p>

            <span>
              <button type="button" className="optionsbutton">
                320 gm
              </button>
              <button type="button" className="optionsbutton">
                800 gm
              </button>
            </span>
            <span>
              <div className="priceofproduct">₹250</div>
              <img className="arrow" src={Arrow} />
            </span>
          </div>

          <div className="personalthumb">
            <div>
              <img
                style={{ backgroundColor: "#f5f5f5" }}
                className="dishpicture"
                src={FoodCategory}
              />
            </div>
            <p className="dishnames">HUFT Drizzle Chicken Liver Dog Biscuits</p>

            <span>
              <button type="button" className="optionsbutton">
                320 gm
              </button>
              <button type="button" className="optionsbutton">
                800 gm
              </button>
            </span>
            <span>
              <div className="priceofproduct">₹250</div>
              <img className="arrow" src={Arrow} />
            </span>
          </div>

          <div className="personalthumb">
            <div>
              <img
                style={{ backgroundColor: "#f5f5f5" }}
                className="dishpicture"
                src={FoodCategory}
              />
            </div>
            <p className="dishnames">HUFT Drizzle Chicken Liver Dog Biscuits</p>

            <span>
              <button type="button" className="optionsbutton">
                320 gm
              </button>
              <button type="button" className="optionsbutton">
                800 gm
              </button>
            </span>
            <span>
              <div className="priceofproduct">₹250</div>
              <img className="arrow" src={Arrow} />
            </span>
          </div>

          <div className="personalthumb">
            <div>
              <img
                style={{ backgroundColor: "#f5f5f5" }}
                className="dishpicture"
                src={FoodCategory}
              />
            </div>
            <p className="dishnames">HUFT Drizzle Chicken Liver Dog Biscuits</p>

            <span>
              <button type="button" className="optionsbutton">
                320 gm
              </button>
              <button type="button" className="optionsbutton">
                800 gm
              </button>
            </span>
            <span>
              <div className="priceofproduct">₹250</div>
              <img className="arrow" src={Arrow} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
