import React, { useRef } from "react";
import { Jumbotron, Container, Row, Col, Form, Button } from "react-bootstrap";
import "./style.css";
import API from "../../utils/API"

function Logins() {
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const pwdRef = useRef();

  function signup() {
    console.log(`${fnameRef.current.value} ${lnameRef.current.value} ${emailRef.current.value} ${pwdRef.current.value}`)
    API.newUser({
      email: emailRef.current.value,
      password: pwdRef.current.value,
      f_name: fnameRef.current.value,
      l_name: lnameRef.current.value,
    })
    .then(result => {
      console.log(result)
    })
  }

  return (
    <Container>
      <Jumbotron className="jumbo-border-double logo">
        {/* <Image src={process.env.PUBLIC_URL + "/assets/images/bottle.jpg"}  fluid /> */}
        <h1 className="white-text">Login / Sign-up</h1>
        <hr />
        <Row>
          <Col className="text-center">
            <Jumbotron className="jumbo-border-double">
              <h2 className="">Login</h2>
              <Form className="text-right">
              <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button
                  className="button-border white-text"
                  variant="dark"
                  size="lg"
                  block
                >
                  Login
                </Button>
              </Form>
            </Jumbotron>
          </Col>
          <Col>
            <Jumbotron className="jumbo-border-double">
              <h2 className="">Sign-up</h2>
              <Form className="text-right">
                <Form.Group controlId="formGroupFirst">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="firstname"
                    placeholder="Enter your first name"
                    ref={fnameRef}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupLast">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="lastname"
                    placeholder="Enter your last name"
                    ref={lnameRef}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" ref={pwdRef}/>
                </Form.Group>
                <Button
                  className="button-border text-white"
                  variant="dark"
                  size="lg"
                  block
                  onClick={() => signup()}
                >
                  Sign-up
                </Button>
              </Form>
            </Jumbotron>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default Logins;
