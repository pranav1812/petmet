import React, {useState, useEffect} from 'react';
import {Form} from 'react-bootstrap';
import ls from 'local-storage'
import '../Admin/Admin.css';
import {auth, db, storage} from '../../firebase';
import '../Admin/Admin.css'
import {Router, Link} from 'react-router-dom';

export default function EditProfile() {

  const [uid, setUid]= useState(null)

  const [profile, setProfile]= useState({
    name: null,
    mail: null,
    address: null,
    phone: null,
    city: null,
    state: null,
    zip:null
  })

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        setUid(user.uid)
        db.collection('user').doc(user.uid).get()
          .then(doc=>{
            if(!doc.exists){
              alert("some error occured")
            }
          })
      }
    })
    
  },[])

  const submit=()=>{
    const {name, mail, phone, address, city, state, zip}= profile
    db.collection('user').doc(uid).update({
      ...profile,
    }).then(()=>{
      window.location= window.location.protocol + "//" + window.location.host + "/" +'Home/'
    })
    
  }


  return (
    <React.Fragment>
      <h1 className="main-head mt-4">UPDATE YOUR PROFILE</h1>
        <div className="container m-4">
                    <Form className="addProduct_form">
                        <Form.Group className="row">
                            <Form.Label className="col-3">Name</Form.Label>
                            <Form.Control required className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" id="Name"
                               name="Name" autoComplete="given-name"
                               onBlur={e=>{setProfile({...profile, name: e.target.value})}}> 
                               </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">E-Mail</Form.Label>
                            <Form.Control required className="col-7 col-sm-8 offset-sm-0 offset-1" as="input"
                            id="mail"
                            name="mail"
                            autoComplete="email"
                            onBlur={e=>{setProfile({...profile, mail: e.target.value})}}> 
                            </Form.Control>
                            </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Phone Number</Form.Label>
                            <Form.Control required className="col-7 col-sm-8 offset-sm-0 offset-1" as="input"
                             id="phone"
                             name="phone"
                             autoComplete="number"
                             onBlur={e=>{setProfile({...profile, number: e.target.value})}}> 
                             </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Address</Form.Label>
                            <Form.Control required className="col-7 col-sm-8 offset-sm-0 offset-1" as="input"
                             id="address"
                             name="address"
                             autoComplete="address"
                             onBlur={e=>{setProfile({...profile, address: e.target.value})}}> 
                             </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">City</Form.Label>
                            <Form.Control required className="col-7 col-sm-8 offset-sm-0 offset-1" as="input"
                             id="city"
                             name="city"
                             autoComplete="city"
                             onBlur={e=>{setProfile({...profile, city: e.target.value})}}> 
                             </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">State</Form.Label>
                            <Form.Control required className="col-7 col-sm-8 offset-sm-0 offset-1" as="input"
                             id="state"
                             name="state"
                             autoComplete="state"
                             onBlur={e=>{setProfile({...profile, state: e.target.value})}}> 
                             </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Zip</Form.Label>
                            <Form.Control required className="col-7 col-sm-8 offset-sm-0 offset-1" as="input"
                             id="zip"
                             name="zip"
                             autoComplete="shipping postal-code"
                             onBlur={e=>{setProfile({...profile, zip: e.target.value})}}> 
                             </Form.Control>
                        </Form.Group>
                        <button type="button" className="offset-4 offset-sm-3 pink_out" onClick={submit}>
                            Update
                        </button>
                    </Form>
                </div>
    </React.Fragment>
  );
}

{/**
<Typography variant="h6" gutterBottom>
        Update your Profile
      </Typography>
     
        <Grid item xs={12}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Full name"
            fullWidth
            autoComplete="given-name"
            onBlur={e=>{ls.set('name', e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mail"
            name="mail"
            label="E-mail"
            fullWidth
            autoComplete="email"
            onBlur={e=>{ls.set('mail', e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone Number"
            fullWidth
            autoComplete="number"
            onBlur={e=>{ls.set('phone', e.target.value)}}
          />
        </Grid>
            <Grid>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="address"
            required
            onBlur={e=>{ls.set('address', e.target.value)}}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="city"
            onBlur={e=>{ls.set('city', e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State" fullWidth
          onBlur={e=>{ls.set('state', e.target.value)}}
          />
          
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Pin code"
            fullWidth
            autoComplete="shipping postal-code"
            onBlur={e=>{ls.set('pin', e.target.value)}}
          />
        </Grid>
        </Grid>
*/}