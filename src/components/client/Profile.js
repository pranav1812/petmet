// import React, {Component} from 'react';
// import {Form} from 'react-bootstrap';
// import ls from 'local-storage'
// import '../Admin/Admin.css';

// import {auth, db, storage} from '../../firebase';

// class EditProfile extends Component () {


//   constructor(props) 
//   {
//     super(props);
//     this.state = { 
//         name: null,
//         mail: null,
//         phone: null,
//         address: null,
//         city: null,
//         state: null, 
//         zip: null,
//         uid :null,
//       }
// }


// submit=()=>{
//     // console.log(this.state)
//     var {name,mail,phone,address,city,state,zip}= this.state
//     if(name && mail && phone && address && city && state && zip)
//     {
//         var ref =db.collection('user').doc(uid).update({
//                  details: this.state
            
//         })
//       }
             
//         // alert("Done.... Refresh the page to add new product")
    
//     else
//     {
//         alert("name,mail,phone,address,city,state,zip .... required")
//     }
    
// }
// render()
//  { 
//   return (
//     <React.Fragment>
//       <h1 className="main-head mt-4">UPDATE YOUR PROFILE</h1>
//         <div className="container m-4">
//                     <Form className="addProduct_form">
//                         <Form.Group className="row">
//                             <Form.Label className="col-3">Name</Form.Label>
//                             <Form.Control required className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{this.setState({name: e.target.value})}}>
//                             </Form.Control>
//                         </Form.Group>
//                         <Form.Group className="row">
//                             <Form.Label className="col-3">E-Mail</Form.Label>
//                             <Form.Control required className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{this.setState({name: e.target.value})}}></Form.Control>
//                         </Form.Group>
//                         <Form.Group className="row">
//                             <Form.Label className="col-3">Phone Number</Form.Label>
//                             <Form.Control required className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{this.setState({name: e.target.value})}}> 
//                             </Form.Control>
//                         </Form.Group>
//                         <Form.Group className="row">
//                             <Form.Label className="col-3">Address</Form.Label>
//                             <Form.Control required className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{this.setState({name: e.target.value})}}></Form.Control>
//                         </Form.Group>
//                         <Form.Group className="row">
//                             <Form.Label className="col-3">City</Form.Label>
//                             <Form.Control required className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{this.setState({name: e.target.value})}}></Form.Control>
//                         </Form.Group>
//                         <Form.Group className="row">
//                             <Form.Label className="col-3">State</Form.Label>
//                             <Form.Control required className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{this.setState({name: e.target.value})}}></Form.Control>
//                         </Form.Group>
//                         <Form.Group className="row">
//                             <Form.Label className="col-3">Zip</Form.Label>
//                             <Form.Control required className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{this.setState({name: e.target.value})}}>
//                              </Form.Control>
//                         </Form.Group>
//                         <button type="button" className="offset-4 offset-sm-3 pink_out">
//                             Update
//                         </button>
//                     </Form>
//                 </div>
//     </React.Fragment>
//   );
// }
// }

// {/**
// <Typography variant="h6" gutterBottom>
//         Update your Profile
//       </Typography>
     
//         <Grid item xs={12}>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="name"
//             name="name"
//             label="Full name"
//             fullWidth
//             autoComplete="given-name"
//             onBlur={e=>{ls.set('name', e.target.value)}}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="mail"
//             name="mail"
//             label="E-mail"
//             fullWidth
//             autoComplete="email"
//             onBlur={e=>{ls.set('mail', e.target.value)}}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="phone"
//             name="phone"
//             label="Phone Number"
//             fullWidth
//             autoComplete="number"
//             onBlur={e=>{ls.set('phone', e.target.value)}}
//           />
//         </Grid>
//             <Grid>
//           <TextField
//             required
//             id="address"
//             name="address"
//             label="Address"
//             fullWidth
//             autoComplete="address"
//             required
//             onBlur={e=>{ls.set('address', e.target.value)}}
//           />
//         </Grid>
        
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="city"
//             name="city"
//             label="City"
//             fullWidth
//             autoComplete="city"
//             onBlur={e=>{ls.set('city', e.target.value)}}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField id="state" name="state" label="State" fullWidth
//           onBlur={e=>{ls.set('state', e.target.value)}}
//           />
          
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="zip"
//             name="zip"
//             label="Pin code"
//             fullWidth
//             autoComplete="shipping postal-code"
//             onBlur={e=>{ls.set('pin', e.target.value)}}
//           />
//         </Grid>
//         </Grid>
// */}

// export default EditProfile;