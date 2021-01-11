import React from "react";
import { Card, Badge } from "react-bootstrap";

const WalkerCard = (props) => {
  const { data } = props;
  return (
    <div>
      <Card className="mb-2">
        <Card.Body>
          <div className="row">
            <div className="col-12 col-lg-6">
              <ul className="list-unstyled">
                <li>
                  <strong>Customer Name: </strong> <br />{" "}
                </li>
                {/*<li><strong>Pet Name: </strong>abc@test.com <br /></li>
                                                <li><strong>Time-Slot: </strong>12/9/2020 9:00pm <br /></li>*/}
                <li>
                  <strong>Mode: </strong> <br />{" "}
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-6">
              <ul className="list-unstyled">
                <li>
                  <strong>Walker ID: </strong>
                  <br />
                </li>
                {/*<li><strong>Clinic: </strong>Pranav Vet Clinic <br /> </li>*/}
                <li>
                  <strong>Package: </strong> <br />{" "}
                </li>
              </ul>
            </div>
          </div>
          <h5>
            <Badge pill variant="info"></Badge>
          </h5>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WalkerCard;
