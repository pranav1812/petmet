import React from 'react';
import {Card} from 'react-bootstrap';

const Orders = () => {
    return ( 
        <div>
                <Card className="mb-2">
                            <Card.Body>
                                    <div className="row">
                                        <div className="col-12">
                                            <ul className="list-unstyled">
                                                <li><strong>Customer Name: </strong> Sartajbir Singh<br /> </li>
                                                <li><strong>Product Name: </strong>Biscuits <br/></li>
                                                <li><strong>Total Cost: </strong>Rs. 3000 <br/></li>
                                            </ul>
                                        </div>
                                    </div>
                                <div className="row justify-content-center">
                                <button className="btn-sm pink_btn mr-2">Cancel Order</button>
                                <button className="btn-sm blue_btn">Delivered</button>
                                </div>
                            </Card.Body>
                </Card>
        </div>
     );
}
 
export default Orders;

/*<li><strong>Address: </strong> 123 Model Town, Patiala, Punjab<br /></li>
                                                <li><strong>Total Cost: </strong>Rs. 5000 <br /></li>*/

/*<li><strong>Category: </strong>Dog Food <br /> </li>
                                                <li><strong>Quantity: </strong>10 <br /></li>*/