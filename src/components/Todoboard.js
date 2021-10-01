import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import TodoCard from "./TodoCard";
import { AddNoteButton } from "./AddNoteButton";
import { onSnapshot, collection, where, query } from "firebase/firestore";
import { db, auth } from "../firebase";
import TodoAddModal from "./TodoAddModal";
import { TODOS, USERID } from "../constants";

const Todoboard = () => {
  const [todos, setTodos] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  const userId = auth.currentUser ? auth.currentUser.uid : "";
  const q = query(collection(db, TODOS), where(USERID, "==", userId));
  useEffect(() => {
    const todosListener = onSnapshot(q, (querySnapshot) => {
      const todos = [];
      querySnapshot.forEach((doc) => {
        const todo = { id: doc.id, ...doc.data() };
        todos.push(todo);
      });
      setTodos(todos);
    });
    return () => todosListener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(todos, "2222");
  return (
    <div>
      <div className="content-wrapper">
        <div className="content-header"></div>

        <div className="content">
          <Container>
            <AddNoteButton setModalShow={setModalShow} />
            <TodoAddModal show={modalShow} onHide={() => setModalShow(false)} />
            <Row>
              {todos.map((todo) => (
                <TodoCard todo={todo} />
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Todoboard;
