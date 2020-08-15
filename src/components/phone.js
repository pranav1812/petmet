import React, {useEffect} from 'react'
import * as firebase from 'firebase'
import * as firebaseui from "firebaseui";
import {auth} from '../firebase';

export default function Phone() {
    useEffect(()=>{

        auth.onAuthStateChanged(user=>{
            if(user) window.location='http://localhost:3000/home'
            
          })   

        const uiConfig = {
            signInSuccessUrl: "http://localhost:3000/home", //This URL is used to return to that page when we got success response for phone authentication.
            signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
            tosUrl: "http://localhost:3000/home"
          };
          var ui = new firebaseui.auth.AuthUI(firebase.auth());
          ui.start("#firebaseui-auth-container", uiConfig);
    },[])
    return (
        <div>
            <div id="firebaseui-auth-container"></div>
        </div>
    )
}
