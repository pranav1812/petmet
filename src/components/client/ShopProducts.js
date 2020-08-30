import React, {useState, useEffect} from "react";
import FoodCategory from "../pictures/image 15.png";
import "./shopproducts.css";
import Arrow from "../pictures/Vector.png";
import {db, auth} from '../../firebase'
import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom'
const ShopProducts = () => {

  const [products, setProducts]= useState(null)
  const {subComponent}= useParams()
  useEffect(()=>{
    
    db.collection("items").doc(subComponent).collection("products").get()
      .then(docs=>{
        var temp= []
        docs.forEach(doc=>{
          temp.push({...doc.data(), key: doc.id})
        })

        setProducts(temp)
        console.log(temp.length)
      })
  }, [])

  


  return (
    <div>
    {
      products? products.map(pro=>(
        <div className="bodyleavingnav">
        
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
          <Link to={"/ShopPage/"+subComponent+"/"+pro.key}>
            <div className="personalthumb">
              <div>
                <img
                  style={{ backgroundColor: "#f5f5f5" }}
                  className="dishpicture"
                  src={pro.details.url}
                />
              </div>
              <p className="dishnames">
                {pro.details.name}
              </p>

              <span>
                <button type="button" className="optionsbutton">
                {pro.details.size}
                </button>
                
              </span>
              <span>
                <div className="priceofproduct">₹{ pro.details.cost} </div>
                {/* <img className="arrow" src={Arrow} /> */}
              </span>
            </div>
          </Link>
          
        </div>
      </div>
      )): null
    }
    
     
    </div>
  );
};

export default ShopProducts;
