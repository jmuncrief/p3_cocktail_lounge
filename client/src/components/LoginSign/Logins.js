import React from "react";
import { Jumbotron, Container, Row, Col, Image, Form } from "react-bootstrap";


function Logins() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
        <Jumbotron>
          <h2 className="">Login</h2>
          <Form className="text-right white-text">
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Jumbotron>
        </Col>
        <Col>
        <Jumbotron>
          <h2 className="">Sign-up</h2>
          <Form className="text-right white-text">
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Logins;
