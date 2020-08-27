import React, { useEffect, useState} from 'react';
import {Form} from 'react-bootstrap';
//import ls from 'local-storage';
import {auth, db, storage} from '../../firebase';
import '../Admin/Admin.css'
import {Router, Link} from 'react-router-dom';

export default function Addpet(){
  
  const [uid, setUid]= React.useState(null)
  const [state, setState] = useState({
    uid :null,
    name: null,
    animal: null,
    breed: null,
    age: null,
    gender: null,
  })
const [url, setUrl]=useState(null)        

useEffect(()=>{
  auth.onAuthStateChanged(user=>{
      if(user){
          if(user.emailVerified){
              setUid(user.uid)
              db.collection('user').doc(user.uid).get()
                  .then(doc=>{ 
                      if(! doc.exists){
                          db.collection('user').doc(user.uid).set({
                              profileCompleted: false
                          })
                        }
                    })
                 }
              }
      else if(!user){
      alert('login required')
      }     
  })
},[])


const sendImg=(e)=>{
    var file= e.target.files[0]
    var storageRef= storage.ref('petImages/'+file.name)
    storageRef.put(file).then(()=> {
    alert("image uploaded")
    storageRef.getDownloadURL()
        .then(url=> setUrl(url ))
        .catch(err=> console.log(err))
    })
    .catch(err=> console.log(err))
}

const  submit=()=>{
  // console.log(this.state)
  var {name, breed, animal, age, gender, url}= state
  if(name && animal && breed && age && gender && url)
  {
      var ref =db.collection('user').doc(uid).collection('pets').update({
                      details: state
                  })
              
  
}

  return (
      <React.Fragment>
      <h1 className="main-head mt-4">COMPLETE THE PROFILE OF YOUR PETS</h1>
        <div className="container addProduct">
                    <Form className="addProduct_form">
                        <div className="row mb-3">
                            <Form.Label className="col-3">Add Pet Image</Form.Label>
                            <input className="col-7 col-sm-8 offset-sm-0 offset-1" type="file"  id="group_image" onChange={sendImg} />
                          
                        </div>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Name</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{setState({name: e.target.value})}}>  
                               </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Animal</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{setState({animal: e.target.value})}}>  
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Breed</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{setState({breed: e.target.value})}}>
                             </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Age</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{setState({age: e.target.value})}}>
                             </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Gender</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{setState({gender: e.target.value})}}>
                             </Form.Control>
                        </Form.Group>
                       
                       <button type="button" className="offset-4 offset-sm-3 pink_out" onClick={submit}>
                            Submit
                        </button>
                        
                    </Form>
                </div>
    </React.Fragment>
  );
};
}
