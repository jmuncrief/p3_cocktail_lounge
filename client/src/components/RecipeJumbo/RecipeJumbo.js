import React, {useRef} from "react";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import API from "../../utils/API";
import "./style.css";

function RecipeJumbo() {
  // would be a lot cleaner to just save the data returned from the API call
  const nameRef = useRef();
  const ingRef = useRef();

  function addToFaves() {
    console.log(ingRef.current.innerHTML)
    // API.addFavorite({
    //   drinkId: "", // do we need to save this?
    //   name: "",
    //   category: "", // or this?
    //   alcoholic: "",
    //   imageURL: "",
    //   instructions: "",
    //   ingredients: "",
    // })
  }
  return (
    <Container className="text-center jumbo-sizing">
      <Row>
        <Col>
          <Jumbotron className="jumbo-border-double text-center logo">
            <h1 className="white-text text-align-center ">Recipe</h1>

            <h2 className="white-text text-align-center margin-close" ref={nameRef}>
              Drink Name
            </h2>

            <Image className="double-border-white" src="" rounded />
            <div className="jumbo-border-double text-align-center background-grey" ref={ingRef}>
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
              onClick={addToFaves}
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
