import React, { useEffect, useState } from "react";
import RecipeForm from "../components/RecipeForm/RecipeForm";
import { Container, Row, Col } from "react-bootstrap";
import Search from "../components/Search/Search";
import Fav from "../components/FavoritesList/FavoritesList";

export default function Members() {
  const [name, setName] = useState("");
  const [faves, setFaves] = useState([]);
  const [cust, setCust] = useState([]);

  useEffect(() => {
    fetch("/api/users/members", {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ name, favorites, customs,}) => {
        setName(name);
        setFaves(favorites);
        setCust(customs);
      });
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 className="welcome-member">
          Welcome {name} 
        </h1>
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
          <Col>
            {(() => {
             if (cust.length > 0 && faves.length > 0) {
                return <Fav customIds={cust} favoriteIds={faves} />
            }})()}
          </Col>
        </Row>
      </Container>
    </>
  );
}
