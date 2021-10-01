import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { addNote } from "../firebase";
import { auth } from "../firebase";

const NoteAddModal = (props) => {
  const [titleContent, setTitleContent] = React.useState("");
  const [targetValue, setTargetValue] = React.useState("");
  const userId = auth.currentUser ? auth.currentUser.uid : "";
  const submit = (title, target) => {
    const noteModel = {
      title,
      target,
      currentStats: 0,
      startDate: new Date(),
      userId: userId,
    };
    addNote(noteModel);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Note Edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                placeholder={titleContent}
                onChange={(e) => setTitleContent(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Target</Form.Label>
            <Form.Control
              value={targetValue}
              onChange={(e) => setTargetValue(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button
          onClick={() => {
            submit(titleContent, targetValue);
            props.onHide();
          }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NoteAddModal;
