/*
this code snippet shall ve added to the componentDidMount function of all the components 
we want to be accessed by only authenticated and verified users
*/

/* ------------------- snippet ------------------*/

// import * as firebase from 'firebase'
// import {auth} from '../firebase'

// componentDidMount(){
//     var user=auth.currentUser
//     if(! user){
//       window.location="<url of login page>"
//     }
//     else if(!user.emailVerified){
//       user.sendEmailVerification().then(function() {
//         window.location="<url of a page that shows that you need to verify your email first>"
//         alert("verification Email sent.")
//       }).catch(function(error) {
//         console.error(error)
//       });
//     }
//     else{
//       console.log("anything")
//     }
//     console.log(user)
//   }

/* ------------------- snippet ------------------*/