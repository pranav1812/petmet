import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
//import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
//import Typography from '@material-ui/core/Typography';
//import ButtonBase from '@material-ui/core/ButtonBase';
import {db, auth} from '../../firebase';
import Doctor from '../pictures/doc.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        margin: 'auto',
        width: '100%',
        height: '500px'
      },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      width: '100%',
      height: '100%'
    },
    image: {
      width: "25%",
      height: "80%",
    },
    img: {
      margin: 'auto',
      display: 'block',
      width: '100%',
      height: '100%',
    },
  }));
  
  export default function Profile() {
    const classes = useStyles();
    const [state, setState]= useState({})

    useEffect(()=>{
      // doc id-> uid of user
        db.collection('vet').doc('Wsqzi5DoefSSpKvTKELy').get()
            .then((doc)=>{
                setState(doc.data())
                
            }).catch(err=> {
            console.error(err)
            })
        },[])
        console.log(state)
    return (
      <div className="container profile_container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-5 offset-sm-1">
            <h4 className="mt-2 mb-3 head">Name of Vet</h4>
            <img src={Doctor} className="profile_img" />
            <p style={{color: "#36A9CC"}} className="mt-2">Verified</p>
          </div>
          <div className="col-12 col-md-6">
            <div className="row mt-5 mt-sm-2">
              <strong className="col-6 col-sm-5 col-lg-3">Name:</strong>
              <p className="col">Someone</p>
            </div>
            <div className="row">
              <strong className="col-6 col-sm-5 col-lg-3">Address:</strong>
              <p className="col">#23 Model Town</p>
            </div>
            <div className="row">
              <strong className="col-6 col-sm-5 col-lg-3">City:</strong>
              <p className="col">Patiala</p>
            </div>
            <div className="row">
              <strong className="col-6 col-sm-5 col-lg-3">State:</strong>
              <p className="col">Punjab</p>
            </div>
            <div className="row">
              <strong className="col-6 col-sm-5 col-lg-3">Mobile No:</strong>
              <p className="col">8980767999</p>
            </div>
            <div className="row">
              <strong className="col-6 col-sm-5 col-lg-3">Qualification:</strong>
              <p className="col"></p>
            </div>
            <div className="row">
              <strong className="col-6 col-sm-5 col-lg-3">Experience:</strong>
              <p className="col">Name of the doctor</p>
            </div>
            <div className="row">
              <strong className="col-6 col-sm-5 col-lg-3">Achievements:</strong>
              <p className="col">Name of the doctor</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  



