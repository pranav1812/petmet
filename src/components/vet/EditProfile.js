import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';
import './vet.css';
import {db, storage} from '../../firebase'

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: null,
            address: null,
            city: null,
            state: null,
            phone: null,
            Achievements: null, 
            Qualification: null,
            Experience: null,
            url: null
         }
    }

    sendImg=(e)=>{
        var file= e.target.files[0]
        var storageRef= storage.ref('vetImages/'+file.name)
        storageRef.put(file).then(()=> {
        alert("image uploaded")
        storageRef.getDownloadURL()
            .then(url=> this.setState({url: url}))
            .catch(err=> console.log(err))
        })
        .catch(err=> console.log(err))
    }

    submit=()=>{
         console.log(this.state)
        var {name, address, city, state, phone, Achievements, Qualification, Experience, url}= this.state
        //if(name)
        //{
            db.collection('vet').doc('Wsqzi5DoefSSpKvTKELy').add({
                            details: this.state
                        })
            
            
            // alert("Done.... Refresh the page to add new product")
        //}
        //else{
          //  alert("error")
       // }
        
        
    }
   
    render() { 
        return ( 
            <>
                <h1 className="addSlot_h1">Edit Profile</h1>
                <div className="container editProfile">
                    <Form className="editProfile_form">
                        <div className="row mb-3">
                            <Form.Label className="col-3">Image of Vet</Form.Label>
                            <input className="col-7 col-sm-8 offset-sm-0 offset-1" type="file" onChange={this.sendImg}/>
                        </div>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Name</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{this.setState({name: e.target.value})}}></Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Address</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="textarea" rows="3" onBlur={(e)=>{this.setState({address: e.target.value})}}></Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">City</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{this.setState({city: e.target.value})}}></Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">State</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{this.setState({state: e.target.value})}}></Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Mobile No</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{this.setState({phone: e.target.value})}}></Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Qualification</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{this.setState({Qualification: e.target.value})}}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Experience</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="textarea" rows="3" onBlur={(e)=>{this.setState({Experience: e.target.value})}}></Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Achievements</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="textarea" rows="3" onBlur={(e)=>{this.setState({Achievements: e.target.value})}}></Form.Control>
                        </Form.Group>
                      
                      <button type="submit" className="offset-4 offset-sm-3 pink-btn" onClick={this.submit}>
                            Done                 </button>
                    </Form>
                </div>
            </>
         );
    }
}
 
export default EditProfile;