import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import NoteCard from "./NoteCard";
import { AddNoteButton } from "./AddNoteButton";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db, auth } from "../firebase";
const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const userId = auth.currentUser.uid;
  console.log("userId", userId);
  const q = query(collection(db, "notes"), where("userId", "==", userId));

  useEffect(() => {
    console.log("in userEffect");
    const notesListener = onSnapshot(q, (querySnapshot) => {
      const notes = [];
      console.log("in listern");
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        console.log(doc);
        notes.push(doc.data());
      });
      setNotes(notes);
    });
    return () => notesListener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("sdadasdasd", notes);
  return (
    <div>
      <div className="content-wrapper">
        <div className="content-header"></div>

        <div className="content">
          <Container>
            <AddNoteButton />
            <Col>
              {notes.map((note) => (
                <NoteCard note={note} />
              ))}
            </Col>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
