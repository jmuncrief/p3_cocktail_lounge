import React, { useEffect, useState } from "react";
import { ListGroup, Modal, Button } from "react-bootstrap";
import API from "../../utils/API";

import "./FavoritesList.css";

function Fav(props) {
  const [custNames, setCustNames] = useState([]);
  const [faveNames, setFaveNames] = useState([]);
  const [show, setShow] = useState(false);
  const [modalState, setModalState] = useState({
    name: "",
    img: "",
    ingredients: [],
    instructions: "",
    alcoholic: ""
  });


  const handleClose = () => {
      setShow(false)};
  const handleFaveShow = (e) => {
      API.getOneFaveRecipe(e.target.value).then((res) => {
          console.log(res.data);
          setModalState({
            name: res.data.name,
            img: res.data.img,
            ingredients: res.data.ingredients,
            instructions: res.data.instructions,
            alcoholic: res.data.alcoholic
          });
          setShow(true);
    })}

    const handleCustShow = (e) => {
      API.getOneCustRecipe(e.target.value).then((res) => {
          console.log(res.data);
          let ingredientsArr = []
          res.data.ingredients.forEach((obj => {
            ingredientsArr.push(`${obj.ingredient} ${obj.measure}`)
          }))
          setModalState({
            name: res.data.name,
            ingredients: ingredientsArr,
            instructions: res.data.instructions,
            alcoholic: res.data.alcoholic
          });
          setShow(true);
    })}

  function getCustRecipes(arr) {
    API.getCustoms(arr).then((res) => {
      console.log(res.data);
      let drinkNames = [];
      res.data.forEach((drink) => {
        drinkNames.push(drink.name);
      });
      setCustNames(drinkNames);
    });
  }

  function getFaveRecipes(arr) {
    API.getFavorites(arr).then((res) => {
      let drinkNames = [];
      res.data.forEach((drink) => {
        drinkNames.push(drink.name);
      });
      setFaveNames(drinkNames);
    });
  }

  useEffect(() => {
    getCustRecipes(props.customIds);
    getFaveRecipes(props.favoriteIds);
  }, [props.customIds, props.favoriteIds]);


  return (
    <>
      <h2 className="favorites-title">My Custom Recipes</h2>
      <ListGroup className="fav-box">
        {custNames.map((name) => (
          <ListGroup.Item className="fav-list" action value={name} onClick={(e) => handleCustShow(e)}>
            {name}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h2 className="favorites-title">My Favorites</h2>
      <ListGroup className="fav-box">
        {faveNames.map((name) => (
          <ListGroup.Item className="fav-list" action value={name} onClick={(e) => handleFaveShow(e)}>
            {name}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="favModal-header"  closeButton>
          <Modal.Title className="favModal-title"><h2>{modalState.name}</h2>{(() => {
            if (modalState.alcoholic) {
              return <h4>Alcoholic</h4>
            } return <h4>Non-Alcoholic</h4>
          })()}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="favModal-body">
          <h4>Ingredients:</h4><ul>{modalState.ingredients.map((ing) => (
        <li>{ing}</li>))}</ul>
        <h4>Instructions:</h4><p>{modalState.instructions}</p>
        </Modal.Body>
        <Modal.Footer className="favModal-footer">
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Fav;
