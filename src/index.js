import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

// ------------------bootswatch-------------
import "bootswatch/dist/minty/bootstrap.min.css";

import Navbar from "./navbar";
import Checkin from "./CheckIn";
import Profile from "./components/checkout/Profile";
import ResponsiveDrawer from "./navbar";
import Album from "./components/Album";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DashboardClient from "./components/dashboardclient/DashboardClient";
import Addpet from './components/client/Addpet';

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
