import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ResponsiveDrawer from './navbar'


/* ----- test components -----*/

import Dashboard from './components/vet/dashboard'

/* ----------------------------------------- */


ReactDOM.render(<Dashboard />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
