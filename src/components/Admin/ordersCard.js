import React,{useState} from 'react';
import {Card,Modal} from 'react-bootstrap';

const Orders = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                                <button className="btn-sm pink_btn mr-2" onClick={handleShow}>View Order</button>
                                <button className="btn-sm blue_btn">Delivered</button>
                                </div>
                            </Card.Body>
                </Card>
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Body>
                        <ul className="list-unstyled">
                            <li><strong>Customer Name: </strong> Sartajbir Singh<br /> </li>
                            <li><strong>Product Name: </strong>Biscuits <br/></li>
                            <li><strong>Total Cost: </strong>Rs. 3000 <br/></li>
                            <li><strong>Address: </strong> 123 Model Town, Patiala, Punjab<br /></li>
                            <li><strong>Product Category: </strong>Dog Food <br /> </li>
                            <li><strong>Quantity: </strong>10 <br /></li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn-sm pink_btn" onClick={handleClose}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
        </div>
     );
}
 
export default Orders;
