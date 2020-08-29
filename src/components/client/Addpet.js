import React, {useState, useEffect} from 'react';
import {Form} from 'react-bootstrap';
import ls from 'local-storage';
import {auth, db, storage} from '../../firebase';
import '../Admin/Admin.css'
import {Router, Link} from 'react-router-dom';

export default function Addpet() {

  
  const [uid, setUid]= useState(null)
  const [url, setUrl]= useState(null)

  const [pet, setPet]= useState({
    name: null,
    age: null,
    breed: null,
    category: null,
    weight: null
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

  const addImg=(e)=>{
    var file= e.target.files[0]
    var storageRef= storage.ref('petImages/'+file.name)
    storageRef.put(file).then(()=> {
    alert("image uploaded")
    storageRef.getDownloadURL()
        .then(url=> setUrl(url))
        .catch(err=> console.log(err))
    })
    .catch(err=> console.log(err))
  }
  
  const submit=()=>{
    var ref= db.collection('user').doc(uid).collection('pets')
    const {Name, Age, Breed, Animal, Weight}= pet
    ref.add({
      ...pet,
      url: url
    }).then(()=>{
      window.location= window.location.protocol + "//" + window.location.host + "/" +'myPets/'
    })
    
  }

  return (
    <React.Fragment>
      <h1 className="main-head mt-4">COMPLETE THE PROFILE OF YOUR PETS</h1>
        <div className="container addProduct">
                    <Form className="addProduct_form">
                        <div className="row mb-3">
                            <Form.Label className="col-3">Add Pet Image</Form.Label>
                            <input onChange={addImg} type="file"  id="group_image"/>
                            <img id="target"/>
                        </div>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Name</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" id="Name"
                               name="Name" autoComplete="pet-name"
                               onBlur={e=>{setPet({...pet, name: e.target.value})}}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Animal</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input"
                            id="animal"
                            name="animal"
                            autoComplete="animal"
                            onBlur={e=>{setPet({...pet, category: e.target.value})}}  />
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Breed</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input"
                             id="breed"
                             name="breed"
                             autoComplete="breed"
                             onBlur={e=>{setPet({...pet, breed: e.target.value})}}>
                             </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Age</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input"
                             id="age"
                             name="age"
                             autoComplete="age"
                             onBlur={e=>{setPet({...pet, age: e.target.value})}}>
                             </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Weight</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input"
                             id="weight"
                             name="weight"
                             autoComplete="weight"
                             onBlur={e=>{setPet({...pet, weight: e.target.value})}}>
                             </Form.Control>
                        </Form.Group>
                        <button type="button" className="offset-4 offset-sm-3 pink_out" onClick={submit} >
                            Submit
                        </button>
                      
                    </Form>
                </div>
    </React.Fragment>
  );
};

