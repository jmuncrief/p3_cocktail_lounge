import React from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import "./style.css";

function Members() {
  return (
    <Container>
        <h1 className="white-text">Search</h1>
      <Jumbotron className="jumbo-border-double logo">
        <h2 className="white-text">Drink Name / Ingredient</h2>
        <hr />
        <Row>
          <Col className="text-center">
            <Jumbotron className="jumbo-border-double">
              <h2 className=""></h2>
              <Form className="text-right">
                <Form.Group controlId="formGroupFirst">
                  <Form.Label>Drink name</Form.Label>
                  <Form.Control
                    type="drinkname"
                    placeholder="Enter your drink name"
                  />
                </Form.Group>
                <Button
                  className="button-border white-text"
                  variant="dark"
                  size="lg"
                  block
                >
                  Drink Name Search
                </Button>
              </Form>
            </Jumbotron>
          </Col>

          <Col>
            <Jumbotron className="jumbo-border-double">
              <h2 className="">Ingredient</h2>
              <Form className="text-right">
                <Form.Group controlId="formGroupFirst">
                  <Form.Label>Ingredient</Form.Label>
                  <Form.Control
                    type="firstname"
                    placeholder="Enter your ingredient"
                  />
                </Form.Group>
                <Button
                  className="button-border text-white"
                  variant="dark"
                  size="lg"
                  block
                >
                  Ingredient Search
                </Button>
              </Form>
            </Jumbotron>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default Members;
