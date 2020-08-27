import React, { Component} from 'react';
import {Form} from 'react-bootstrap';
import ls from 'local-storage';
import {auth, db} from '../../firebase';
import '../Admin/Admin.css'
import {Router, Link} from 'react-router-dom';

class Addpet extends Component() {

  
  constructor(props) 
  {
    super(props);
    this.state = { 
        name: null,
        animal: null,
        breed: null,
        age: null,
        gender: null,
        }
}

sendImg=(e)=>{
    var file= e.target.files[0]
    var storageRef= storage.ref('itemImages/'+file.name)
    storageRef.put(file).then(()=> {
    alert("image uploaded")
    storageRef.getDownloadURL()
        .then(url=> this.setState({url: url}))
        .catch(err=> console.log(err))
    })
    .catch(err=> console.log(err))
}

submit=()=>{
    // console.log(this.state)
    var {name, animal, breed, age, gender}= this.state
    if(name && animal && breed && age && gender)
    {
        var ref =db.collection('user').doc(uid)
        ref.get().then(doc=>{
            if(!doc.exists){
                ref.set({
                    type: uid,
                    img: url
                }).then(()=>{
                    ref.collection('pets').add({
                        details: this.state
                    })
                })
            }else{
                ref.collection('pets').add({
                    details: this.state
                })
            }
        })
        
        
        
        // alert("Done.... Refresh the page to add new product")
    }
    else{
        alert("category, name, size, cost, quantity, imageField .... required")
    }
    
    
}
render()
{
  return (
    <React.Fragment>
      <h1 className="main-head mt-4">COMPLETE THE PROFILE OF YOUR PETS</h1>
        <div className="container addProduct">
                    <Form className="addProduct_form">
                        <div className="row mb-3">
                            <Form.Label className="col-3">Add Pet Image</Form.Label>
                            <input className="col-7 col-sm-8 offset-sm-0 offset-1" type="file"  id="group_image" onChange={this.sendImg} />
                            <img id="target"/>
                        </div>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Name</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{this.setState({name: e.target.value})}}>  
                               </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Animal</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{this.setState({animal: e.target.value})}}>  
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Breed</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{this.setState({breed: e.target.value})}}>
                             </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Age</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{this.setState({age: e.target.value})}}>
                             </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Gender</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{this.setState({gender: e.target.value})}}>
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
 }
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