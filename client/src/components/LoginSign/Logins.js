import React, { useState } from "react";
import { Jumbotron, Container, Row, Col, Form, Button } from "react-bootstrap";
import "./style.css";
import API from "../../utils/API";
import { useHistory } from "react-router-dom";
import { LOGIN } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";


function Logins() {
  const history = useHistory();
  const [state, dispatch] = useStoreContext();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPwd, setLoginPwd] = useState("");

  function signup() {
    console.log(
      `${fname} ${lname} ${email} ${pwd}`
    );
    API.newUser({
      email: email,
      password: pwd,
      f_name: fname,
      l_name: lname,
    }).then((result) => {
      console.log(result);
    });
  }

  function login() {
    const email = loginEmail;
    const password = loginPwd;

    fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email, password
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: LOGIN,
          payload: data.message,
        });
        history.push("/members");
      })
      // receive the data here and redirect based on a value that we send back?
      .catch((err) => console.log(err));
  }
  return (
    <Container>
      <h1 className="white-text">Welcome!</h1>
      <Jumbotron className="jumbo-border-double logo">
        {/* <Image src={process.env.PUBLIC_URL + "/assets/images/bottle.jpg"}  fluid /> */}
        <h1 className="white-text">Login / Sign-up</h1>
        <Row>
          <Col className="text-center">
            <Jumbotron className="jumbo-border-double">
              <h2 className="">Login</h2>
              <Form className="text-right">
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange={(e) => setLoginEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={(e) => setLoginPwd(e.target.value)}/>
                </Form.Group>
                <Button
                  className="button-border white-text"
                  variant="dark"
                  size="lg"
                  block
                  onClick={() => login()}
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
                    onChange={(e) => setFname(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupLast">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="lastname"
                    placeholder="Enter your last name"
                    onChange={(e) => setLname(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPwd(e.target.value)}
                  />
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
