import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';

import Navbar from './navbar'
import Checkin from './CheckIn'
import Profile from './components/checkout/Profile'
import ResponsiveDrawer from './navbar'
import Album from './components/Album'
import { BrowserRouter, Route, Link } from "react-router-dom";
 


/* ----- test components -----*/
import Checkout from './components/checkout/Checkout';
import Select from './components/checkout/select';
import Dashboard from './components/vet/dashboard'
import VetForm from './components/checkout/VetForm'
/* ----------------------------------------- */



<<<<<<< HEAD
ReactDOM.render(<BrowserRouter><Profile /></BrowserRouter>, document.getElementById('root'));
=======
ReactDOM.render(<Profile />, document.getElementById('root'));
>>>>>>> c3855a57f9ad6943d41b8d65790a5f911525d2ef



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
