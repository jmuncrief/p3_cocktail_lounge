import React, { useEffect, useState } from "react";
import RecipeForm from "../components/RecipeForm/RecipeForm";
import { Container, Row, Col } from "react-bootstrap";
import Search from "../components/Search/Search";
import Fav from "../components/FavoritesList/FavoritesList";

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
      });
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>
          Welcome {name} id: {userId}
        </h1>

        {/* <RecipeForm id={userId} /> */}
      </div>

      <Container>
        <Row style={{ marginTop: "50px", justifyContent: "center" }}>
          <Search />
        </Row>
        <br />
        <Row>
          <Col>
            <RecipeForm />
          </Col>
          <Col>{cust.length > 0 && <Fav customIds={cust} />}</Col>
        </Row>
      </Container>
    </>
  );
}
