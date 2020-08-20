import React, {useEffect} from 'react'
import {auth, db} from '../firebase'

export default function VWaiting() {
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(!user){
                window.location='http://localhost:3000/vLogin'
            }
            else if(!user.emailVerified){
                window.location='http://localhost:3000/vVerifyEmail'
            }
            else{
                db.collection('vet').doc(user.uid).get()
                    .then(doc=>{
                        if(doc.exists){
                            if(doc.data().profileCompleted){
                                window.location='http://localhost:3000/v/Profile'
                            }
                            else{
                                window.location='http://localhost:3000/vCompleteProfile'
                            }
                        }
                    })
            }
        })
    },[])
    return (
        <div>
            <h5>Processing your info. Just a sec </h5>
        </div>
    )
}
