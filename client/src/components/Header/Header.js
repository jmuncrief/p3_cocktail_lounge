import React from "react";
import {  Navbar, Nav } from 'react-bootstrap';
import "./Header.css";

function Header() {
    return (
        <Navbar bg="" expand="lg" className="navbar">
            <Navbar.Brand href="/home" id="webpage-title">Cocktail Lounge</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/members" className="hpLink">Members</Nav.Link>
                </Nav>
                <Nav className="">
                    <Nav.Link href="/logins" className="hpLink" style={{ justifyContent: "end" }}>Sign-In</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Header;