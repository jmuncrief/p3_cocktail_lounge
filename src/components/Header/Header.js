import React from "react";
import { Button, Form, FormControl, Navbar, NavDropdown, Nav } from 'react-bootstrap';



function Header() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home" id="title">Cocktail Lounge</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Favorites</Nav.Link>
                    <NavDropdown title="Sort by liquor" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Vodka</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Rum</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Gin</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Tequila</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Scotch</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form >
                    <Nav.Link href="#login" style={{ justifyContent: "end" }}>Sign-In</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >




    )
}

export default Header;