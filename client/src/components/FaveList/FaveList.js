import React, { useEffect, useState } from "react";
import { ListGroup, Modal, Button } from "react-bootstrap";
import API from "../../utils/API";

export default function FaveList(props) {
  const [names, setNames] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function getRecipes(arr) {
    // console.log(arr);
    API.getCustoms(arr).then((res) => {
      console.log(res.data);
      let drinkNames = [];
      res.data.map((drink) => {
        drinkNames.push(drink.name);
      });
      setNames(drinkNames);
    });
  }

  useEffect(() => {
    getRecipes(props.customIds);
  }, []);

  return (
    <>
    <h2 className="favorites-title">My Favorites</h2>
      <ListGroup className="fav-box">
        {names.map((name) => (
          <ListGroup.Item className="fav-list" action>
            {name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
