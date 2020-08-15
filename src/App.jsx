import React, {useEffect, useState} from 'react';
import Login from './components/signin'
import Phone from './components/phone'
import VetLogin from './components/vSignin'
import Checkout from './components/checkout/Checkout'
import Dashboard from './components/client/Dashboard'
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
        <Route exact path='/login' component={Login} />
        <Route exact path='/phone' component={Phone} />
        <Route exact path='/vLogin' component={VetLogin} />              
        <Route exact path='/Checkout' component = {Checkout} />
        <Route exact path='/verifyEmail' component = {VerifyEmail} />
        <Route exact path='/:componentt' component={Dashboard} />
      </Switch> 
      
    
    </div>
  );
}
export default App;
