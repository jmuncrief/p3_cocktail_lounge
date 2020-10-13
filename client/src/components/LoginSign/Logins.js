import React from "react";
import { Jumbotron, Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import "./style.css";

function Logins() {
  return (
    <Container>
      <Jumbotron className="jumbo-border-double logo">
        {/* <Image src={process.env.PUBLIC_URL + "/assets/images/bottle.jpg"}  fluid /> */}
        <h1 className="white-text">Login / Sign-up</h1>
        <hr />
        <Row>
          <Col className="text-center">
            <Jumbotron className="jumbo-border-double">
              <h2 className="">Login</h2>
              <Form className="text-right">
                <Form.Group controlId="formGroupFirst">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="firstname"
                    placeholder="Enter your first name"
                  />
                </Form.Group>
                <Form.Group controlId="formGroupLast">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="lastname"
                    placeholder="Enter your last name"
                  />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button
                  className="button-border white-text"
                  variant="dark"
                  size="lg"
                  block
                >
                  Login
                </Button>
              </Form>
            </Jumbotron>
          </Col>
          <Col>
            <Jumbotron className="jumbo-border-double">
              <h2 className="">Sign-up</h2>
              <Form className="text-right">
                <Form.Group controlId="formGroupFirst">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="firstname"
                    placeholder="Enter your first name"
                  />
                </Form.Group>
                <Form.Group controlId="formGroupLast">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="lastname"
                    placeholder="Enter your last name"
                  />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button
                  className="button-border text-white"
                  variant="dark"
                  size="lg"
                  block
                >
                  Sign-up
                </Button>
              </Form>
            </Jumbotron>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default Logins;
