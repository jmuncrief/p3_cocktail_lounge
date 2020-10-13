import React, { useRef } from "react";
import { Button, Form, FormControl, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import "./Header.css";
import API from "../../utils/axiosCalls"



function Header() {

    const inputRef = useRef();
    // typeRef to be used as "ref" attribute of search-selection dropdown
    const typeRef = useRef();

    async function search(query, type) {
        switch (type) {
            case "Ingredient": {
                const {data} = await API.filterIngredient(query)
                console.log(data.drinks)
            } break;
            case "Drink Name": {
                const {data} = await API.searchCocktailName(query)
                console.log(data.drinks)
            } break;
            case "Random": {
                const {data} = await API.random()
                console.log(data.drinks)
            } break;
        
            default:
                break;
        }

    }


    return (
        <Navbar bg="" expand="lg" class="navbar">
            <Navbar.Brand href="#home" id="title">Cocktail Lounge</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home" className="hpLink">Favorites</Nav.Link>
                    <NavDropdown title="Sort by liquor" id="nav-dropdown">
                        <NavDropdown.Item className="liquors" href="#action/3.1">Vodka</NavDropdown.Item>
                        <NavDropdown.Item className="liquors" href="#action/3.2">Rum</NavDropdown.Item>
                        <NavDropdown.Item className="liquors" href="#action/3.3">Gin</NavDropdown.Item>
                        <NavDropdown.Item className="liquors" href="#action/3.3">Tequila</NavDropdown.Item>
                        <NavDropdown.Item className="liquors" href="#action/3.3">Scotch</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" ref={inputRef} />
                        <Button onClick={() => search(inputRef.current.value)} variant="outline-success">Search</Button>
                    </Form >
                    <Nav.Link href="#login" className="hpLink" style={{ justifyContent: "end" }}>Sign-In</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >




    )
}

export default Header;