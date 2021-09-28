import React from "react";
import { Container, Col, Button } from "react-bootstrap";
import NoteCard from "./components/NoteCard";

const Dashboard = () => {
  return (
    <div>
      <div className="content-wrapper">
        <div className="content-header"></div>

        <div className="content">
          <Container>
            <Button
              variant="secondary"
              style={{ paddingInline: 30, margin: 15 }}
            >
              +
            </Button>
            <Col>
              <NoteCard />
            </Col>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
