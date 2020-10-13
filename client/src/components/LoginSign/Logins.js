import React from "react";
import { Jumbotron, Container, Row, Col, Image, Form } from "react-bootstrap";
import "./style.css";


function Logins() {
  return (
    <Container>
      <Jumbotron className="jumbo-border-double">
        <h1>Login / Sign-up</h1>
        <hr/>
      <Row>
        <Col className="text-center">
        <Jumbotron className="jumbo-border-double">
          <h2 className="">Login</h2>
          <Form className="text-right white-text">
          <Form.Group controlId="formGroupUser">
              <Form.Label>Username</Form.Label>
              <Form.Control type="user" placeholder="Enter username" />
            </Form.Group>
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
        <Jumbotron className="jumbo-border-double">
          <h2 className="">Sign-up</h2>
          <Form className="text-right white-text">
          <Form.Group controlId="formGroupUser">
              <Form.Label>Username</Form.Label>
              <Form.Control type="user" placeholder="Enter username" />
            </Form.Group>
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
      </Jumbotron>
    </Container>
  );
}

export default Logins;
