import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';
import './Admin.css';
import {db, storage} from '../../firebase'

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: null,
            description: null,
            cost: null,
            size: null,
            quantity: null,
            category: null, 
            ingriedients: null,
            addInfo: null,
            url: null
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
        var {category, name, size, cost, quantity, url}= this.state
        if(category && name && size && cost && quantity && url)
        {
            var ref =db.collection('items').doc(category)
            ref.get().then(doc=>{
                if(!doc.exists){
                    ref.set({
                        type: category,
                        img: url
                    }).then(()=>{
                        ref.collection('products').add({
                            details: this.state
                        })
                    })
                }else{
                    ref.collection('products').add({
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
    render() { 
        return ( 
            <>
                <h1 className="main-head">ADD A  NEW PRODUCT</h1>
                <div className="container addProduct">
                    <Form className="addProduct_form">
                        <div className="row mb-3">
                            <Form.Label className="col-3">Image of Product</Form.Label>
                            <input className="col-7 col-sm-8 offset-sm-0 offset-1" type="file" onChange={this.sendImg} />
                        </div>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Name</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{this.setState({name: e.target.value})}}></Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Description</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="textarea" rows="3" onBlur={(e)=>{this.setState({description: e.target.value })}} />
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Cost</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{this.setState({cost: e.target.value})}}></Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Category</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="select" onChange={(e)=>{this.setState({category: e.target.value })}}>
                                <option defaultChecked>--Add Category--</option>
                                <option>Food</option>
                                <option>Harness</option>
                                <option>Grooming</option>
                                <option>Cat Essentials</option>
                                <option>Clothing</option>
                                <option>Litter Management</option>
                                <option>Chewss</option>
                                <option>Toys</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Size</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="select" onChange={(e)=>{this.setState({size: e.target.value })}}>
                                <option defaultChecked>--Add Size--</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>Other</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Quantity</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" onBlur={(e)=>{this.setState({quantity: e.target.value })}}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Ingredients</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="textarea" rows="3" onBlur={(e)=>{this.setState({ingriedients: e.target.value })}} />
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Additional Information</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="textarea" rows="3" onBlur={(e)=>{this.setState({addInfo: e.target.value})}} />
                        </Form.Group>
                        <button type="button" onClick={this.submit} className="offset-4 offset-sm-3 pink_btn pink_btn_form">
                            Add Product
                        </button>
                    </Form>
                </div>
            </>
         );
    }
}
 
export default AddProduct;