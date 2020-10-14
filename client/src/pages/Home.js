import React from "react";
import { Col, Row, Container, } from "react-bootstrap";
import Slides from "../components/Slides/Slides"

const Home = () => {
  return (
    <Container>
      <Row className="text-center">
        <Col>
          <Slides />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
