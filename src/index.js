import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.min.css";

// ------------------bootswatch-------------
import "bootswatch/dist/minty/bootstrap.min.css";

import ResponsiveDrawer from "./navbar";
import Album from "./components/Album";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DashboardClient from "./components/dashboardclient/DashboardClient";

import VetCard from "./components/client/VetCard";

import ShopProducts from "./components/client/ShopProducts";
import ShopPage from "./components/shop/ShopPage";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
