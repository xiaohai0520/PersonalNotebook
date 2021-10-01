import React from "react";
import { Button } from "react-bootstrap";

export const AddNoteButton = (props) => {
  const { setModalShow } = props;
  return (
    <Button
      variant="secondary"
      style={{ paddingInline: 30, margin: 15 }}
      onClick={() => setModalShow(true)}
    >
      +
    </Button>
  );
};
