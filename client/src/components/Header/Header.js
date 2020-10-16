import React, { useRef, useState } from "react";
import { Button, Form, FormControl, Navbar, NavDropdown, Nav, Dropdown, DropdownButton } from 'react-bootstrap';
import "./Header.css";

function Header() {
    return (
        <Navbar bg="" expand="lg" class="navbar">
            <Navbar.Brand href="/home" id="webpage-title">Cocktail Lounge</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/members" className="hpLink">Favorites</Nav.Link>
                    <NavDropdown title="Sort by liquor" id="nav-dropdown">
                        <NavDropdown.Item className="liquors" href="#action/3.1">Vodka</NavDropdown.Item>
                        <NavDropdown.Item className="liquors" href="#action/3.2">Rum</NavDropdown.Item>
                        <NavDropdown.Item className="liquors" href="#action/3.3">Gin</NavDropdown.Item>
                        <NavDropdown.Item className="liquors" href="#action/3.3">Tequila</NavDropdown.Item>
                        <NavDropdown.Item className="liquors" href="#action/3.3">Scotch</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="">
                    <Nav.Link href="/logins" className="hpLink" style={{ justifyContent: "end" }}>Sign-In</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Header;