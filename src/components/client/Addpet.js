import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ls from 'local-storage';
import {auth, db} from '../../firebase';

import {Router, Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

export default function Addpet() {

  
  const [uid, setUid]= useState(null)

  const submit=()=>{
    db.collection('user').doc(uid).collection('pets').update({
      Name: ls.get('Name'),
      animal: ls.get('animal'),
      breed: ls.get('breed'),
      age: ls.get('age'),
      gender: ls.get('gender'),
      })
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Complete the profile of your pets
      </Typography>
      <div className="add_grp_image_div margin_bottom">
      <img className="add_grp_image"/>
      <input type="file" className="filetype" id="group_image"/>
      <span className="small_font to_middle">Add PET image</span>
      <img id="target"/>
 </div>
      <Grid container spacing={3}>

        

        <Grid item xs={12} sm={6}>
            <TextField
            required
            id="Name"
            name="Name"
            label="Name"
            fullWidth
            autoComplete="pet-name"
            onBlur={e=>{ls.set('petName', e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="animal"
            name="animal"
            label="Animal"
            fullWidth
            autoComplete="animal"
            onBlur={e=>{ls.set('animal', e.target.value)}}
          />
        </Grid>
 
        <Grid item xs={12}>
          <TextField
            required
            id="breed"
            name="breed"
            label="Breed"
            fullWidth
            autoComplete="breed"
            onBlur={e=>{ls.set('breed', e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="age"
            name="age"
            label="Age"
            fullWidth
            autoComplete="age"
            onBlur={e=>{ls.set('age', e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="gender" name="gender" label="Gender" fullWidth
          onBlur={e=>{ls.set('gender', e.target.value)}}
         />
        </Grid>
                 
  <Link to='/Home/'><Button variant="contained" color="primary">
  Submit
</Button> </Link>
      </Grid>
    </React.Fragment>
  );
};