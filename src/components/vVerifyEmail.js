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
                    db.collection('vet').doc(user.uid).get()
                        .then(doc=>{
                            if(!doc.exists){
                                db.collection('vet').doc(user.uid).set({
                                    profileCompleted: false
                                })
                                window.location='http://localhost:3000/vCompleteProfile'
                            }
                            else if(!doc.data().profileCompleted) 
                                window.location='http://localhost:3000/vCompleteProfile'
                            else{
                                window.location= 'http://localhost:3000/vDashboard'
                            }
                        })
                        setButton(true)
                }else{
                    alert("verification required")
                }
            }else{
                window.location='http://localhost:3000/vLogin'
            }
        })
    },[])
    const move=()=>{
        window.location='http://localhost:3000/vCompleteProfile'
    }
    
    return (
        <div>
            <h3>Email verification Link was sent to your registered email.<br /> 
            Verify and refresh this page </h3>
            
            
            {button? (<div>
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
