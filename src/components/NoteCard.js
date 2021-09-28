import React from "react";
import { Card, Row, Col, ProgressBar, Button } from "react-bootstrap";

const NoteCard = () => {
  return (
    <Card style={{ padding: 15 }}>
      <Row>
        <Col sm={10}>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Description:</Card.Text>
          <ProgressBar animated now={60.5} label={`${60.5}%`} />
          <Row style={{ marginTop: 10 }}>
            <Col>Expire Date:</Col>
            <Col>Rest Days:</Col>
          </Row>
        </Col>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Button variant="primary" style={{ marginRight: 5 }}>
            Edit
          </Button>
          <Button variant="danger">Delete</Button>
        </Col>
      </Row>
    </Card>
  );
};

export default NoteCard;
