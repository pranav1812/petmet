import React from 'react';
import {Card} from 'react-bootstrap';

const AppointmentCard = () => {
    return ( 
        <div>
                <Card className="mb-2">
                            <Card.Body>
                                    <div className="row">
                                        <div className="col-12 col-lg-6">
                                            <ul className="list-unstyled">
                                                <li><strong>Customer Name: </strong> Sartajbir Singh<br /> </li>
                                                <li><strong>Address: </strong> 123 Model Town, Patiala, Punjab<br /></li>
                                                <li><strong>Mobile No.: </strong>98937236926 <br /></li>
                                                <li><strong>Email-Id: </strong>abc@test.com <br /></li>
                                                <li><strong>Pet Name: </strong>abc@test.com <br /></li>
                                                <li><strong>Time-Slot: </strong>12/9/2020 9:00pm <br /></li>
                                            </ul>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <ul className="list-unstyled">
                                                <li><strong>Vet Name: </strong>Dr. Pranav <br/></li>
                                                <li><strong>Clinic: </strong>Pranav Vet Clinic <br /> </li>
                                                <li><strong>Address: </strong>123 Model Town, Patiala, Punjab <br /></li>
                                                <li><strong>Phone No.: </strong>103370727 <br /></li>
                                                <li><strong>Email-Id: </strong>sfud@tst.com <br /></li>
                                            </ul>
                                        </div>
                                    </div>
                                <button className="btn-sm pink_btn mr-2">Completed</button>
                            </Card.Body>
                </Card>
        </div>
     );
}
 
export default AppointmentCard;