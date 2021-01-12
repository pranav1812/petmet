import React from "react";
import { Card, Badge } from "react-bootstrap";
import { db } from '../../firebase';

const AdoptionCard = (props) => {
  const { data } = props;
  const markDone= ()=>{
    db.collection('adoptionRequests').doc(props.data.key).update({
        status: "done"
    }).then(()=> window.location.reload())
  }
  return (
    <div>
      <Card className="mb-2">
        <Card.Body>
        <h3> Pet name: {props.data.petInfo.name} </h3>
          <div className="row">
          
            <div className="col-12 col-lg-6">

              <ul className="list-unstyled">
                <li>
                  <strong>Current Owner: </strong> {props.data.ownerInfo.name} <br />{" "}
                </li>
                <li>
                  <strong>Current Owner Phone: </strong> {props.data.ownerInfo.phone} <br />{" "}
                </li>
                <li>
                  <strong>Current Owner Address: </strong> {props.data.ownerInfo.address} <br />{" "}
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-6">
              <ul className="list-unstyled">
                <li>
                  <strong>New Owner: </strong>{props.data.buyerInfo.name}
                  <br />
                </li>
                <li>
                  <strong>New Owner Phone: </strong> {props.data.buyerInfo.phone}
                  <br />
                </li>
                <li>
                  <strong>New Owner Address: </strong> {props.data.buyerInfo.address}
                  <br />
                </li>

              </ul>
            </div>
          </div>
          <h5>
            <Badge pill variant="info"></Badge>
          </h5>
          {/*-----------------*/}
          <button onClick={markDone}>
            Mark as done
          </button>
          {/*-----------------*/}
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdoptionCard;
