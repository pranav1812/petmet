import React from 'react';
import {Card,Badge} from 'react-bootstrap';
import { db } from '../../firebase';

const TrainerCard = (props) => {
    const {data}= props
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
                                                <li><strong>Customer Phone: </strong> {props.data.userInfo.phone} <br /> </li>
                                                <li><strong>Customer Address: </strong> {props.data.userInfo.address} <br /> </li>
                                                <li><strong>Customer E-Mail: </strong> {props.data.userInfo.mail} <br /> </li>
                                            </ul>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <ul className="list-unstyled">
                                                <li><strong>Package ID: </strong>{props.data.doctorId} <br/></li>
                                                <li><strong>Package: </strong> {props.data.packInfo.description} <br /> </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*-----------------*/}
                                    <button onClick={markDone}>
                                        Mark as done
                                    </button>
                                    {/*-----------------*/}
                            </Card.Body>
                </Card>
        </div>
     );
}
 
export default TrainerCard;