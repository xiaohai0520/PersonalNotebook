import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import NoteCard from "./NoteCard";
import { AddNoteButton } from "./AddNoteButton";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db, auth } from "../firebase";

const Dashboard = () => {
  const [notes, setNotes] = useState([]);

  const userId = auth.currentUser ? auth.currentUser.uid : "";
  const q = query(collection(db, "notes"), where("userId", "==", userId));

  useEffect(() => {
    const notesListener = onSnapshot(q, (querySnapshot) => {
      const notes = [];
      querySnapshot.forEach((doc) => {
        const note = { id: doc.id, ...doc.data() };
        notes.push(note);
      });
      setNotes(notes);
    });
    return () => notesListener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
