import React, { Component } from 'react';
import './Admin.css';
import Product from './product';

class RecentProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="row">
                <div className="col-lg-6 col-12">
                    <Product />
                </div>
                <div className="col-lg-6 col-12">
                    <Product />
                </div>
                <div className="col-lg-6 col-12">
                    <Product />
                </div>
                <div className="col-lg-6 col-12">
                    <Product />
                </div>
                <div className="col-lg-6 col-12">
                    <Product />
                </div>
                <div className="col-lg-6 col-12">
                    <Product />
                </div>
            </div>
         );
    }
}
 
export default RecentProducts;