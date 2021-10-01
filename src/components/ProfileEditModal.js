import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { setModel } from "../firebase";
import { USERS } from "../constants";

const ProfileEditModal = (props) => {
  const { userName, userId } = props;

  const [name, setName] = React.useState(userName);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Profile Edit
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={(e) => setName(e.target.value)} />
            </Form.Group>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button
          onClick={() => {
            setModel(USERS, userId, { userName: name });
            props.onHide();
          }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileEditModal;
