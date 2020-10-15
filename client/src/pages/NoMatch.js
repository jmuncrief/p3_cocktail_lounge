import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import RecipeForm from "../components/RecipeForm/RecipeForm";

const NoMatch = () => {
  return (
    <>
    <Container fluid>
      <Row>
        <Col className="md-12 text-center">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
    <RecipeForm />
    </>
  );
};

export default NoMatch;
