import React, { useEffect, useState } from "react";
import RecipeForm from "../components/RecipeForm/RecipeForm";
import { ListGroup } from "react-bootstrap";
import API from "../utils/API";

export default function Members() {
  const [name, setName] = useState("");
  const [faves, setFaves] = useState("");
  const [cust, setCust] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    fetch("/api/users/members", {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ name, favorites, customs, id }) => {
        setName(name);
        setFaves(favorites);
        setCust(customs);
        setUserId(id);
        customs.map(id => {
            API.getCustoms(id).then(res => {
                console.log(res.data)
                // need to access res.data outside this function to render it on the page
            })
        })
      });
  }, []);

  return (
    <div>
      <h1>
        logged in as {name} id: {userId}
      </h1>
      <h3>favorites: {faves}</h3>
      <h3>customs:{cust} </h3>
      <RecipeForm />
      <ListGroup>
          {cust.map((id, idx) => (
          <ListGroup.Item action key={idx}>
          {id}
        </ListGroup.Item>
        ))}
        
      </ListGroup>
    </div>
  );
}
