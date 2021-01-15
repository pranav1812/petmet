import React from 'react';
import {Card} from 'react-bootstrap';
import { db } from '../../firebase';

const HostelCard = (props) => {
    const markDone= ()=>{
        db.collection('AppointmentRecord').doc(props.data.key).update({
            status: "done"
        }).then(()=> window.location.reload())
    }
    return ( 
        <div>
            <Card className="mb-2">
                            <Card.Body>
                                    <div className="row">
                                        <div className="col-12 col-lg-6">
                                            <ul className="list-unstyled">
                                                <li><strong>Customer Name: </strong> {props.data.userInfo.name} <br /> </li>
                                                <li><strong>Phone No.: </strong> {props.data.userInfo.phone} <br /> </li>
                                                <li><strong>Drop Date: </strong> {props.data.hostelInfo.pickupDate} <br /> </li>
                                                <li><strong>Drop Timing: </strong> {props.data.hostelInfo.pickupTime} <br /> </li>
                                            </ul>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <ul className="list-unstyled">
                                                <li><strong>Hostel: </strong> {props.data.hostelInfo.name} <br/></li>
                                                {
                                                    /*<li><strong>Number of Days: </strong> {props.data.hostelInfo} <br /> </li>
                                                <li><strong>Number of Hours:</strong> {props.data.hostelInfo} <br /> </li> */ 
                                            }
                                                <li><strong>Pick-up Date: </strong> {props.data.hostelInfo.returnDate}  <br /> </li>
                                                <li><strong>Pick-up Timing: </strong> {props.data.hostelInfo.returnTime}  <br /> </li>
                                            </ul>
                                        </div>
                                         {/*-----------------*/}
                                        <button onClick={markDone}>
                                            Mark as done
                                        </button>
                                {/*-----------------*/}
                                    </div>
                            </Card.Body>
                </Card>
        </div>
     );
}
 
export default HostelCard;