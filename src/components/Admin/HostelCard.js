import React from 'react';
import {Card} from 'react-bootstrap';

const HostelCard = () => {
    return ( 
        <div>
            <Card className="mb-2">
                            <Card.Body>
                                    <div className="row">
                                        <div className="col-12 col-lg-6">
                                            <ul className="list-unstyled">
                                                <li><strong>Customer Name: </strong> Sample <br /> </li>
                                                <li><strong>Phone No.: </strong>  <br /> </li>
                                                <li><strong>Drop Date: </strong>  <br /> </li>
                                                <li><strong>Drop Timing: </strong>  <br /> </li>
                                            </ul>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <ul className="list-unstyled">
                                                <li><strong>Hostel: </strong> <br/></li>
                                                <li><strong>Number of Days: </strong> <br /> </li>
                                                <li><strong>Number of Hours:</strong> <br /> </li>
                                                <li><strong>Pick-up Date: </strong>  <br /> </li>
                                                <li><strong>Pick-up Timing: </strong>  <br /> </li>
                                            </ul>
                                        </div>
                                    </div>
                            </Card.Body>
                </Card>
        </div>
     );
}
 
export default HostelCard;