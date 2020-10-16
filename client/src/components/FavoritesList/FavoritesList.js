import React, { useEffect, useState, useRef } from "react";
import { ListGroup, Modal, Button } from "react-bootstrap";
import API from "../../utils/API";

import "./FavoritesList.css";

function Fav(props) {
  const [custNames, setCustNames] = useState([]);
  const [faveNames, setFaveNames] = useState([]);
  const [show, setShow] = useState(false);
  const nameRef = useRef();
  const query = {abc: "a new favorite"}

  const handleClose = () => {
      setShow(false)};
  const handleShow = () => {
      API.getOneFaveRecipe(query).then((res) => {
          console.log(res)
    })
    setShow(true)};

  function getCustRecipes(arr) {
    // console.log(arr);
    API.getCustoms(arr).then((res) => {
      console.log(res.data);
      let drinkNames = [];
      res.data.map((drink) => {
        drinkNames.push(drink.name);
      });
      setCustNames(drinkNames);
    });
  }

  function getFaveRecipes(arr) {
    API.getFavorites(arr).then((res) => {
      let drinkNames = [];
      res.data.map((drink) => {
        drinkNames.push(drink.name);
      });
      setFaveNames(drinkNames);
    });
  }

  useEffect(() => {
    getCustRecipes(props.customIds);
    getFaveRecipes(props.favoriteIds);
  }, []);

  return (
    <>
      <h2 className="favorites-title">My Custom Recipes</h2>
      <ListGroup className="fav-box">
        {custNames.map((name) => (
          <ListGroup.Item className="fav-list" action ref={nameRef} >
            {name}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h2 className="favorites-title">My Favorites</h2>
      <ListGroup className="fav-box">
        {faveNames.map((name) => (
          <ListGroup.Item className="fav-list" action ref={nameRef} onClick={handleShow}>
            {name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default Fav;
