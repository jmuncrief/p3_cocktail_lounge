import React, { useRef, useState } from "react";
import {
  Button,
  Form,
  FormControl,
  Navbar,
  NavDropdown,
  Nav,
  Dropdown,
  DropdownButton,
  Container,
  Row,
  Col,
  CardDeck,
} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Cocktail from "../Card/Card";
import IngList from "../IngList/IngList";
import "./Search.css";
import API from "../../utils/axiosCalls";
import internalAPI from "../../utils/API";
import sanitizeIngredients from "../../utils/sanitizeIngredientsIntoArray";
import sanitizeIngredientsIntoArray from "../../utils/sanitizeIngredientsIntoArray";

function Search() {
  const [searchState, setSearchState] = useState({
    searchType: "Drink Name",
    dropdownTitle: "Search for:",
    query: "",
  });
  const [results, setResults] = useState([]);
  const [recState, setRecState] = useState({});
  const [show, setShow] = useState(false);
  const [ingArr, setIngArr] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Runs when dropdown value is changed; changes searchType
  function searchSelect(e) {
    setSearchState({ ...searchState, searchType: e, dropdownTitle: e });
  }
  async function search(query) {
    switch (searchState.searchType) {
      case "Ingredient":
        {
          const { data } = await API.filterIngredient(query);
          if (data.drinks) {
            setResults(data.drinks);
          } else { setResults([]) }
        }
        break;
      case "Drink Name":
        {
          const { data } = await API.searchCocktailName(query);
          if (data.drinks) {
            setResults(data.drinks);
          } else { setResults([]) }
        }
        break;
      default:
        break;
    }
  }
  async function randSearch() {
    const { data } = await API.random();
    setResults(data.drinks);
  }
  async function idSearch(id) {
    const { data } = await API.lookupCocktailID(id);
    setRecState(data.drinks[0]);
    handleShow();
  }

  function addToFaves(data) {
    function isAlc() {
      if (data.strAlcoholic === "Alcoholic") {
        return true;
      } else {
        return false;
      }
    }

    internalAPI
      .addFavorite({
        name: data.strDrink,
        alcoholic: isAlc(),
        imageURL: data.strDrinkThumb,
        instructions: data.strInstructions,
        ingredients: sanitizeIngredientsIntoArray(data),
      })
      .then((result) => {
        console.log(result);
      });
  }

  //I placed the two portions of the return into seperate rows to remove the gap that appeared when you search for old margarita between the 5th and 6th cards.
  return (
    <Col>
      <Row className="text-align-center">
        <div>
          <Form inline className="searchComp">
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={(e) =>
                setSearchState({ ...searchState, query: e.target.value })
              }
            />
            <DropdownButton
              variant="danger"
              alignRight
              title={searchState.dropdownTitle}
              id="search-dropdown"
              onSelect={searchSelect}
            >
              <Dropdown.Item eventKey="Drink Name">Drink Name</Dropdown.Item>
              <Dropdown.Item eventKey="Ingredient">Ingredient</Dropdown.Item>
            </DropdownButton>
            <Button
              className="search-btn"
              onClick={() => search(searchState.query)}
              variant="outline-success"
            >
              Search
            </Button>
            <Button
              className="search-btn"
              onClick={() => randSearch()}
              variant="outline-success"
            >
              Random
            </Button>
          </Form>
        </div>
      </Row>
      <Row>
        <CardDeck style={{ justifyContent: "flex-start" }}>
          {results.map((element) => (
            <Cocktail
              style={{ display: "inline-block", justifyContent: "center" }}
              id={element.idDrink}
              name={element.strDrink}
              img={element.strDrinkThumb}
              idSearch={() => idSearch(element.idDrink)}
            />
          ))}
        </CardDeck>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{recState.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {recState.strInstructions}
          <br />
          <IngList data={recState} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => addToFaves(recState)}>
            Add to Favorites
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
}
export default Search;
