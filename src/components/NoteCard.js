import React from "react";
import { Card, Row, Col, ProgressBar, Button } from "react-bootstrap";

const NoteCard = (props) => {
  const { title, description, totalStats, currentStats } = props.note;
  const now = (currentStats / totalStats) * 100;

  return (
    <Card style={{ padding: 15 }}>
      <Row>
        <Col sm={10}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Target: {description}</Card.Text>
          <Card.Text>Start Date: </Card.Text>
          <Card.Text>Expire Date: </Card.Text>
          <Card.Text>Rest Days: </Card.Text>
          <ProgressBar animated now={now} label={`${now}%`} />
        </Col>
        <Col sm={2}>
          <Button variant="success" style={{ marginRight: 5 }}>
            Edit
          </Button>
          <Button variant="danger">Delete</Button>
        </Col>
      </Row>
    </Card>
  );
};

export default NoteCard;
