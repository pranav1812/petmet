import React, {useEffect, useState} from 'react'
import {auth, db} from '../firebase'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));


export default function VerifyEmail() {
    const classes = useStyles();
    const [button, setButton]= useState(false)
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                if(user.emailVerified){
                    db.collection('user').doc(user.uid).get()
                        .then(doc=>{
                            if(!doc.exists){
                                db.collection('user').doc(user.uid).set({
                                    name: user.displayName,
                                    profileCompleted: false
                                })
                                

                            }
                            // else if(doc.data().profileCompleted){
                            //     window.location='http://localhost:3000/dashboard/any'
                            // }
                            // else if(!doc.data().profileCompleted){
                            //     window.location='http://localhost:3000/checkout'
                            // }
                        })
                        setButton(true)
                }else{
                    alert("verification required")
                }
            }else{
                window.location='http://localhost:3000/login'
            }
        })
    },[])
    const move=()=>{
        window.location='http://localhost:3000/checkout'
    }
    const skip=()=>{
        window.location='http://localhost:3000/home'
    }
    return (
        <div>
            <h3>Email verification Link was sent to your registered email.<br /> 
            Verify and refresh this page </h3>
            
            
            {button? (<div>
                <Button
                        variant="contained"
                        color="primary"
                        onClick={skip}
                        className={classes.button}
                >
                        Skip
                </Button>
                <Button
                        variant="contained"
                        color="primary"
                        onClick={move}
                        className={classes.button}
                >
                        Complete Profile
                </Button>
            </div>): null}
        </div>
    )
}
