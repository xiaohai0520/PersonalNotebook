import React from "react";
import { Button } from "react-bootstrap";
import { addNote } from "../firebase";

export const AddNoteButton = () => {
  const handleAddNote = () => addNote({ title: "test" });
  return (
    <Button
      variant="secondary"
      style={{ paddingInline: 30, margin: 15 }}
      onClick={handleAddNote}
    >
      +
    </Button>
  );
};
