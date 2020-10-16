import React, { useState } from "react";
import { Form, Button, Container, Jumbotron, Row, Col } from "react-bootstrap";
import API from "../../utils/API";
import "./RecipeForm.css"

export default function RecipeForm(props) {
  const newIng = { ingredient: "", measure: "" };
  const [ingredients, setIngredients] = useState([{ ...newIng }]);
  const [name, setName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [alcoholic, setAlcholic] = useState("");
  const [shared, setShared] = useState(false);

  function addInput() {
    setIngredients([...ingredients, { ...newIng }]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    API.newCustom({
      name: name,
      alcoholic: alcoholic,
      instructions: instructions,
      ingredients: ingredients,
      shared: shared
    }).then((result) => {
      console.log(result)
    })
  }

  const updateFieldChanged = (name, index) => (e) => {
    let newArr = ingredients.map((item, i) => {
      if (index === i) {
        return { ...item, [name]: e.target.value };
      } else {
        return item;
      }
    });
    setIngredients(newArr);
  };

  return ( 
    <>
      <h2 className="recipe-title">Create A Recipe</h2>
      <Container fluid>
        <Row>
          <Col>
            <Jumbotron className="create-recipe">
              <Form>
                <Form.Group>
                  <Form.Label className="recipe-box-title">Cocktail Name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Cocktail Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Row}>
                  <Col>
                    <Form.Check
                      type="radio"
                      label="Alcoholic"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                      onChange={() => setAlcholic(true)}
                    />
                    <Form.Check
                      type="radio"
                      label="Non-Alcoholic"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                      onChange={() => setAlcholic(false)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group>
                  {ingredients.map((ing, idx) => (
                    <Form.Row>
                      <Col xs={6}>
                        <Form.Control
                          type="text"
                          placeholder={`Ingredient-${idx + 1}`}
                          onChange={updateFieldChanged("ingredient", idx)}
                        />
                      </Col>
                      <Col xs={6}>
                        <Form.Control
                          type="text"
                          placeholder={`Measurement-${idx + 1}`}
                          onChange={updateFieldChanged("measure", idx)}
                        />
                      </Col>
                    </Form.Row>
                  ))} 
                  <br/>
                  <Button variant="danger" onClick={addInput}>Add Ingredient</Button>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label className="recipe-box-title">Instructions:</Form.Label>
                  <Form.Control
                    as="textarea"
                    onChange={(e) => setInstructions(e.target.value)}
                  >
                  </Form.Control>
                </Form.Group>
                <Button variant="danger" type="submit" onClick={handleSubmit}>
                  Save
                </Button> 
                <br/> 
                <br/>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Share this recipe with other users"
                    onChange={() => setShared(!shared)}
                  />
                </Form.Group>
              </Form>
            </Jumbotron>
          </Col>


        </Row>

      </Container> 
      </>
  );
}
