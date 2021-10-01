import React from "react";
import { Card, Row, Col, ProgressBar, Button } from "react-bootstrap";
import NoteEditModal from "./NoteEditModal";
import { deleteModel } from "../firebase";
import { NOTES } from "../constants";

const NoteCard = (props) => {
  const { title, target, currentStats, startDate, id } = props.note;
  const now = (currentStats / target) * 100;
  const [modalShow, setModalShow] = React.useState(false);
  console.log(startDate);

  const startDay = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(startDate.seconds * 1000);
  return (
    <React.Fragment>
      <Card style={{ padding: 15 }}>
        <Row>
          <Col sm={10} style={{ paddingRight: 15 }}>
            <Row>
              <Card.Title>{title}</Card.Title>
              <Row>
                <Col>
                  {" "}
                  <Card.Text>
                    Progress: {currentStats}/{target}{" "}
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>Start Date: {startDay} </Card.Text>
                </Col>
                <Col>
                  <Card.Text>Used Days: </Card.Text>
                </Col>
              </Row>
              <ProgressBar
                style={{ marginTop: 15 }}
                animated
                now={now}
                label={`${now}%`}
              />
            </Row>
          </Col>
          <Col sm={2} style={{ paddingTop: 20 }}>
            <Button
              variant="success"
              style={{ marginRight: 10 }}
              onClick={() => setModalShow(true)}
            >
              Edit
            </Button>
            <Button variant="danger" onClick={() => deleteModel(NOTES, id)}>
              Delete
            </Button>
          </Col>
        </Row>
      </Card>
      <NoteEditModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        note={props.note}
      />
    </React.Fragment>
  );
};

export default NoteCard;
