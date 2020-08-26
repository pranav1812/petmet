import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import ls from 'local-storage';
import {auth, db} from '../../firebase';
import '../Admin/Admin.css'
import {Router, Link} from 'react-router-dom';

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
      <h1 className="main-head mt-4">COMPLETE THE PROFILE OF YOUR PETS</h1>
        <div className="container addProduct">
                    <Form className="addProduct_form">
                        <div className="row mb-3">
                            <Form.Label className="col-3">Add Pet Image</Form.Label>
                            <input className="col-7 col-sm-8 offset-sm-0 offset-1" type="file"  id="group_image"/>
                            <img id="target"/>
                        </div>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Name</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" id="Name"
                               name="Name" autoComplete="pet-name"
                               onBlur={e=>{ls.set('petName', e.target.value)}}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Animal</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input"
                            id="animal"
                            name="animal"
                            autoComplete="animal"
                            onBlur={e=>{ls.set('animal', e.target.value)}}  />
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Breed</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input"
                             id="breed"
                             name="breed"
                             autoComplete="breed"
                             onBlur={e=>{ls.set('breed', e.target.value)}}>
                             </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Age</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input"
                             id="age"
                             name="age"
                             autoComplete="age"
                             onBlur={e=>{ls.set('age', e.target.value)}}>
                             </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Gender</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input"
                             id="gender"
                             name="gender"
                             autoComplete="gender"
                             onBlur={e=>{ls.set('gender', e.target.value)}}>
                             </Form.Control>
                        </Form.Group>
                        <Link to='/Home/'><button type="button" className="offset-4 offset-sm-3 pink_out">
                            Submit
                        </button>
                        </Link>
                    </Form>
                </div>
    </React.Fragment>
  );
};


{/*<Typography variant="h6" gutterBottom>
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
</Grid>*/}