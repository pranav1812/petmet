import React, {useEffect, useState} from 'react';
import Login from './components/signin'
import Checkout from './components/checkout/Checkout'
import Dashboard from './components/client/Dashboard'
import AllLeads from './components/client/allLeads'
import {auth, db} from './firebase'

import {Route, Switch} from 'react-router-dom'

/* --------- trial ------*/
import Profile from './components/checkout/Profile'
import VerifyEmail from './components/verifyEmail'

/* --------- trial ------*/
function App() {
  
  useEffect(()=>{
    console.log("app.js")
  }, [])
  return (
    <div className="kuchh_aur">    
      <Switch>
        <Route exact path='/dashboard/:componentt' component={Dashboard} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/allLeads' component={AllLeads} />
        <Route exact path='/Checkout' component = {Checkout} />
        <Route exact path='/verifyEmail' component = {VerifyEmail} />
      </Switch> 
      
    
    </div>
  );
}

export default App;
