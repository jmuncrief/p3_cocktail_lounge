import React from "react";
import Slides from "../components/Slides/Slides";  
import { Row, Container, Col } from "react-bootstrap"; 
import Search from "../components/Search/Search"


const Home = () => {
  return (  
    <Container fluid>
    <Row>
      <Col className="md-12 text-center">
        <Slides/>
      </Col>
    </Row> 
    <Row> 
      <Search/>
    </Row>
  </Container>
  );
};

export default Home;
