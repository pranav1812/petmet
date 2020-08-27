import React, {useState, useEffect} from 'react'
import {auth, db} from '../../firebase'
import { makeStyles } from '@material-ui/core/styles';

import dog from '../pictures/dog.png'
import rabbit from '../pictures/rabbit.png'
import cat from '../pictures/cat.png'

const home= window.location.protocol + "//" + window.location.host + "/" +'Home/'

const useStyles = makeStyles((theme) => ({
    vet:{
        position: 'absolute',
    width: '141px',
    height: '23px',
    left: '130px',
    top: '238px',
    fontfamily:'Roboto',
    fontstyle: 'normal',
    fontweight: '500',
    fontsize: '20px',
    lineheight: '23px',
    color: '#000000',
},

image:{position: 'absolute',
    width: '94px',
    height: '94px',
    left: '19px',
    top: '238px',
    
    background: 'url(Rectangle60.png)', 
    background:'#C4C4C4',
    borderradius: '3px',},

    address:{
        position: 'absolute',
        width: '206px',
        height: '15px',
        left: '130px',
        top: '288px',
        
        fontfamily: 'Roboto',
        fontstyle: 'normal',
        fontweight: '500',
        fontsize: '13px',
        lineheight: '15px',
        
        color: '#B5B5B5',
        },

        open:{position: 'absolute',
            width: '31px',
            height: '15px',
            left:'130px',
            top: '310px',
            
            fontfamily: 'Roboto',
            fontstyle: 'normal',
            fontweight: '500',
            fontsize: '13px',
            lineheight: '15px',
            
            color: '#B5B5B5',
            },

            dist:{
                position: 'absolute',
                width: '34px',
                height: '14px',
                left: '354px',
                top: '314px',
                
                fontfamily: 'Roboto',
                fontstyle: 'normal',
                fontweight: 'normal',
                fontsize: '12px',
                lineheight: '4px',
                /* identical to box height */
                
                
                color: '#000000',
                },

  }));
  

export default function Appointment() {
    const classes = useStyles();
    const [state, setState]= useState({})
    console.log(state)
    
  const [usr, setUsr]= useState(null)
  useEffect(()=>{
      auth.onAuthStateChanged(user=>{
          if(!user){
              alert("login required")
              window.location= home
          }
          else{
              setUsr(user)
          }
      })
  })
  return (
      <div>
          {usr? (<h1>Appointment</h1>): null}

          <div className="container ">
        <div className="row ">
          <div className="image">
            <img src={dog} className="profile_img" />
          </div>
          <div className="hi">
            <div className="vet">
                
            <strong className="head">Ortho Vet Clinic</strong>
            <p></p>
              <strong className="col">Dr. Arvind Goyal</strong>
            </div>
            <div className="address">
              <p className="col">Shop No. 17, Sector 6, Market Road</p>
            </div>
            <div className="open">
              <p className="col"> Open Closes 9 PM</p>
            </div>
            
            <div className="dist">
              <p className="col">36KM</p>
            </div>
            </div>
      
        </div>
        <hr/>
      </div>
  

      <div className="container ">
        <div className="row ">
          <div className="image">
            <img src={rabbit} className="profile_img" />
          </div>
          <div className="hi">
            <div className="vet">
            <strong className="head">Ortho Vet Clinic</strong>
           <p></p>
              <strong className="col">Dr. Arvind Goyal</strong>
            </div>
            <div className="address">
              <p className="col">Shop No. 17, Sector 6, Market Road</p>
            </div>
            <div className="open">
              <p className="col"> Open Closes 9 PM</p>
            </div>
            
            <div className="dist">
              <p className="col">36KM</p>
            </div>
            </div>
      
        </div>
        <hr/>
      </div>
     

      <div className="container ">
        <div className="row ">
          <div className="image">
            <img src={cat} className="profile_img" />
          </div>
          <div className="hi">
            <div className="vet">
            <strong className="head">Ortho Vet Clinic</strong>
           <p></p>
              <strong className="col">Dr. Arvind Goyal</strong>
            </div>
            <div className="address">
              <p className="col">Shop No. 17, Sector 6, Market Road</p>
            </div>
            <div className="open">
              <p className="col"> Open Closes 9 PM</p>
            </div>
            
            <div className="dist">
              <p className="col">36KM</p>
            </div>
            </div>
      
        </div>
        <hr/>
      </div>
     

      </div>
  )
}
