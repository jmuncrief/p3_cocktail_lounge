import React from "react";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./style.css";

function RecipeJumbo() {
  return (
    <Container className="text-center jumbo-sizing">
      <Row>
        <Col>
          <Jumbotron className="jumbo-border-double text-center logo">
            <h1 className="white-text text-align-center ">Recipe</h1>

            <h2 className="white-text text-align-center margin-close">
              Drink Name
            </h2>

            <Image className="double-border-white" src="" rounded />
            <div className="jumbo-border-double text-align-center background-grey">
              <h2>Ingredients:</h2>
              <p></p>

              <h2>Instructions:</h2>
              <p></p>
            </div>
            <Button
              className="button-border white-text"
              variant="dark"
              size="lg"
              block
            >
              Click here to add this drink to your favorites!
            </Button>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default RecipeJumbo;
