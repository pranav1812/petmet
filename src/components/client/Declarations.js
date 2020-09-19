import React, { useState } from "react";
// import Modal from "react-bootstrap/Modal";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./declarations.css";

const Declarations = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Book Appointment
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <div className="firstmodalbody">
            <p>September 18 2020</p>
            <p>18:30:00</p>
            <br />
            <br />
            <Button
              color="danger"
              style={{ marginLeft: "20px" }}
              onClick={toggleNested}
            >
              Confirm Slot
            </Button>
          </div>

          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>Nested Modal title</ModalHeader>
            <ModalBody>
              heyyyyyyyyyyyyyyyyyyyyyyyyy, this is body of embedded modal
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested}>
                Done
              </Button>{" "}
              <Button color="danger" onClick={toggleAll}>
                All Done
              </Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Declarations;
