import React from "react";
import Slides from "../components/Slides/Slides";
import { Row, Container, Col } from "react-bootstrap";
import Search from "../components/Search/Search"


const Home = () => {
  return (
   
    <Container fluid style={{height:"100vh"}}>
      <Row>
        <Col>
          <Slides />
        </Col>
      </Row>  
      <Row style={{ padding:"20px", justifyContent:"center"}}>
        <Search />
      </Row>
      <div style={{height:"50px" }}></div>
    </Container>
  

  );
};

export default Home;
