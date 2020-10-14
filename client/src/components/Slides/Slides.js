import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'; 
import "./Slides.css"


const Slides = () => {
  return (
    <Container>
      <Row className="text-center">
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../assets/images/vodka.png"
                alt="vodka"
              />
              <Carousel.Caption className="caption">
                <h3>Vodka</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../assets/images/gin.png"
                alt="gin"
              />

              <Carousel.Caption className="caption">
                <h3>Gin</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 responsive"
                src="../assets/images/rum.png"
                alt="rum"
              />

              <Carousel.Caption className="caption">
                <h3>Rum</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 responsive"
                src="../assets/images/tequila.png"
                alt="tequila"
              />

              <Carousel.Caption className="caption">
                <h3>Tequila</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 responsive"
                src="../assets/images/scotch.png"
                alt="scotch"
              />

              <Carousel.Caption className="caption">
                <h3>Scotch</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Slides;
