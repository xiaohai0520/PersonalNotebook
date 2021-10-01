import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { updateModel } from "../firebase";
import { NOTES } from "../constants";
const NoteEditModal = (props) => {
  const { title, target, currentStats, startDate, id } = props.note;
  const startDay = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(startDate.seconds * 1000);

  const [currentStatsValue, setCurrentStatsValue] =
    React.useState(currentStats);
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
              <Form.Control placeholder={title} readOnly />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Start Date</Form.Label>
              <Form.Control placeholder={startDay} readOnly />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Target</Form.Label>
            <Form.Control placeholder={target} readOnly />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Current</Form.Label>
            <Form.Control
              value={currentStatsValue}
              onChange={(e) => setCurrentStatsValue(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button
          onClick={() => {
            updateModel(NOTES, id, { currentStats: currentStatsValue });
            props.onHide();
          }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NoteEditModal;
