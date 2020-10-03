import React from 'react';
import {Form } from 'react-bootstrap';

const AddCategory = () => {
    return ( 
        <div>
            <h1 className="main-head">ADD A NEW CATEGORY</h1>
                <div className="container addProduct">
                    <Form className="addProduct_form">
                        <div className="row mb-3">
                            <Form.Label className="col-3">Image of Product</Form.Label>
                            <input className="col-7 col-sm-8 offset-sm-0 offset-1" type="file"/>
                        </div>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Name</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" ></Form.Control>
                        </Form.Group>
                        <button type="button"  className="offset-4 offset-sm-3 pink_btn pink_btn_form">
                            Add Category
                        </button>
                    </Form>
                </div>
        </div>
     );
}
 
export default AddCategory;