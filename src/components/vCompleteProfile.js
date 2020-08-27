import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
import ls from 'local-storage';
import {auth, db} from '../firebase'

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: "100%"
    },
    button: {
      marginRight: 10,
      borderRadius: 100,
      fontSize: 20,
    },
    instructions: {
      marginTop: 2,
      marginBottom: 5
    }
  });
export default function VCompleteProfile() {
    
  const classes = useStyles();
    const [uid, setUid]= React.useState(null)
    const [state, setState] = useState({
      name: null,
      description: null,
      cost: null,
      size: null,
      quantity: null,
      category: null, 
      ingriedients: null,
      addInfo: null,
      url: null
    })
    const[sbt, setSbt]=useState(false)
    const [url, setUrl]= useState(null)
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
        if(user){
            if(user.emailVerified){
                setUid(user.uid)
                db.collection('vet').doc(user.uid).get()
                    .then(doc=>{
                        if(! doc.exists){
                            db.collection('vet').doc(user.uid).set({
                                profileCompleted: false
                            })
                        }
                        if(doc.exists && doc.data().profileCompleted){
                            window.location= window.location.protocol + "//" + window.location.host + "/" +'v/Profile/' 
                        }
                        
                    })
                    React.setButton(true)
            }else{
                window.location= window.location.protocol + "//" + window.location.host + "/" +'vVerifyEmail/'
            }
        }
        else if(!user){
        window.location= window.location.protocol + "//" + window.location.host + "/" +'vLogin/'
        }     
    })
  },[sbt])


  const submit=()=>{
    var {Name,phone,Achievements,Qualification,experience,Address,city,state,zip}=state
       
    db.collection('vet').doc(uid).update({
   details:state
    })
    setSbt(true)
  }

  return (
    <React.Fragment>
<CssBaseline />
      
      <Typography variant="h6" gutterBottom>
        VET FORM
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Name"
            name="Name"
            label="Name"
            fullWidth
            autoComplete="given-name" onBlur={(e)=>{this.setState({name: e.target.value})}}/>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phone"
            name="phone"
            label="phone"
            fullWidth
            autoComplete="phone"
            onBlur={(e)=>{setState({phone: e.target.value})}} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Achievements"
            name="Achievements"
            label="Achievements"
            fullWidth
            autoComplete="Achievements"
            onBlur={(e)=>{setState({Achievements: e.target.value})}}/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id="Qualification"
            name="Qualification"
            label="Qualification"
            fullWidth
            autoComplete="Qualification"
            onBlur={(e)=>{setState({Qualification: e.target.value})}}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="experience"
            name="experience"
            label="experience in years"
            fullWidth
            autoComplete="years"
            onBlur={(e)=>{setState({experience: e.target.value})}}/>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Address"
            name="Address"
            label="Address"
            fullWidth
            autoComplete="Address"
            onBlur={(e)=>{setState({address: e.target.value})}}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="city"
            onBlur={(e)=>{setState({city: e.target.value})}}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State" fullWidth 
          onBlur={(e)=>{setState({state: e.target.value})}}/>
                </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            onBlur={(e)=>{setState({zip: e.target.value})}}/>
        </Grid>
        

        <Grid item xs={12} sm={6}>
        <Button variant="contained" color="primary" onClick={submit}>
            FINISH
        </Button>
         </Grid>
    
      </Grid>
      </React.Fragment>
  );
}