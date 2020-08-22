import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';
import './vet.css';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <h1 className="addSlot_h1">Edit Profile</h1>
                <div className="container editProfile">
                    <Form className="editProfile_form">
                        <div className="row mb-3">
                            <Form.Label className="col-3">Image of Product</Form.Label>
                            <input className="col-7 col-sm-8 offset-sm-0 offset-1" type="file" />
                        </div>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Name</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input"></Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Address</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="textarea" rows="3" />
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">City</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input"></Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">State</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input"></Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Mobile No</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input"></Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Qualification</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Experience</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="textarea" rows="3" />
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Achievements</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="textarea" rows="3" />
                        </Form.Group>
                        <button type="submit" className="offset-4 offset-sm-3 pink-btn">
                            Add Product
                        </button>
                    </Form>
                </div>
            </>
         );
    }
}
 
export default EditProfile;