import React from "react";
import { Toast } from "react-bootstrap";
import { deleteModel } from "../firebase";
import { TODOS } from "../constants";

const TodoCard = (props) => {
  const { todoThing, id, timestamp } = props.todo;
  const date = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(timestamp.seconds * 1000);
  return (
    <Toast
      style={{ margin: 10 }}
      onClose={() => {
        deleteModel(TODOS, id);
      }}
    >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Todo</strong>
        <small>{date}</small>
      </Toast.Header>
      <Toast.Body>{todoThing}</Toast.Body>
    </Toast>
  );
};

export default TodoCard;
