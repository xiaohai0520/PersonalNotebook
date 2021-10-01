import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { addModel } from "../firebase";
import { auth } from "../firebase";
import { TODOS } from "../constants";

const TodoAddModal = (props) => {
  const [todoThing, setTodoThing] = React.useState("");

  const userId = auth.currentUser ? auth.currentUser.uid : "";
  const submit = (todoThing) => {
    const todoModel = {
      todoThing,
      timestamp: new Date(),
      userId: userId,
    };
    addModel(TODOS, todoModel);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Todo Add</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Todo</Form.Label>
              <Form.Control onChange={(e) => setTodoThing(e.target.value)} />
            </Form.Group>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button
          onClick={() => {
            submit(todoThing);
            props.onHide();
          }}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TodoAddModal;
