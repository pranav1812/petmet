
import React, {useState, useEffect} from 'react'
import {auth, db} from '../../firebase'

export default function Appointment() {
  const [usr, setUsr]= useState(null)
  useEffect(()=>{
      auth.onAuthStateChanged(user=>{
          if(!user){
              alert("login required")
              window.location='http://localhost:3000/Home'
          }
          else{
              setUsr(user)
          }
      })
  })
  return (
      <div>
          {usr? (<h1>Appointment</h1>): null}
      </div>
  )
}
