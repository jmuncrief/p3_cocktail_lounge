import React, { useEffect, useState } from "react";
import RecipeForm from "../components/RecipeForm/RecipeForm";
import { Container, Row, Col } from "react-bootstrap";
import Search from "../components/Search/Search";
import Fav from "../components/FavoritesList/FavoritesList";

export default function Members() {
  const [name, setName] = useState("");
<<<<<<< HEAD
  const [faves, setFaves] = useState([]);
=======
  const [faves, setFaves] = useState("");
>>>>>>> 045158ed0d78e5b2c1a4a2fd36b08c5c58e462a6
  const [cust, setCust] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    fetch("/api/users/members", {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ name, favorites, customs, id }) => {
        setName(name);
        setUserId(id);
        setFaves(favorites);
        setCust(customs);
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
