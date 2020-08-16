import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import Navbar from "./navbar";
import Checkin from "./CheckIn";
// import Profile from "./components/checkout/Profile";
import ResponsiveDrawer from "./navbar";
import Album from "./components/Album";
import ShopPage from "./components/shop/ShopPage";
import Dashboard from "./components/dashboardclient/Dashboard";
import { BrowserRouter, Route, Link } from "react-router-dom";

/* ----- test components -----*/
import Checkout from "./components/checkout/Checkout";
import Select from "./components/checkout/select";
// import Dashboard from "./components/vet/dashboard";
import VetForm from "./components/checkout/VetForm";
/* ----------------------------------------- */

ReactDOM.render(
  <BrowserRouter>
    <Dashboard />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
