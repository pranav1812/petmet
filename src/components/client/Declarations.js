// import React, { useState } from "react";
// import Modal from "react-bootstrap/Modal";

// // .............................................................
// export function Declarations() {
//   const [show, setShow] = useState(true);
//   const [showw, setShoww] = useState(false);

//   const handleClose1 = () => setShow(false);
//   const handleShow1 = () => setShow(true);

//   const handleClose2 = () => {
//     setShoww(false);
//   };
//   const handleShow2 = () => {
//     setShow(false);
//     setShoww(true);
//   };

//   return (
//     <div>
//       <Modal show={show} onHide={handleClose1} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Order Item</Modal.Title>
//         </Modal.Header>

//         <Modal.Footer>
//           <button onClick={handleShow2}>Next</button>
//           <button onClick={handleClose1}>Cancel</button>
//         </Modal.Footer>
//       </Modal>

//       <Modal
//         size="lg"
//         show={showw}
//         onHide={() => {
//           setShoww(false);
//         }}
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Order Item</Modal.Title>
//         </Modal.Header>

//         <Modal.Footer>
//           <h1>hogyaaaa</h1>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }
