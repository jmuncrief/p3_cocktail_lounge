import React, { useRef } from "react";
import { Button, Form, FormControl, Navbar, NavDropdown, Nav, Dropdown, DropdownButton } from 'react-bootstrap';
import "./Header.css";
import API from "../../utils/axiosCalls"




function Header() {

    // Refs to search field and dropdown
    const inputRef = useRef();
    const typeRef = useRef();

    let searchType = "Drink Name"

    // Runs when dropdown value is changed; changes searchType
    function searchSelect(e) {
        searchType = e
        // NOTE: Want to change value (title attr.) of dropdown to current selection. Currently errors out
        // typeRef.title = e
    }

    async function search(query) {
        switch (searchType) {
            case "Ingredient": {
                const { data } = await API.filterIngredient(query)
                console.log(data.drinks)
            } break;
            case "Drink Name": {
                const { data } = await API.searchCocktailName(query)
                console.log(data.drinks)
            } break;
            default:
                break;
        }

    }

    async function randSearch() {
        const { data } = await API.random()
        console.log(data.drinks[0])
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

                        <DropdownButton alignRight title="Search for:" id="search-dropdown"
                            ref={typeRef} onSelect={searchSelect}>
                            <Dropdown.Item eventKey="Drink Name">Drink Name</Dropdown.Item>
                            <Dropdown.Item eventKey="Ingredient">Ingredient</Dropdown.Item>
                        </DropdownButton>

                        <Button onClick={() => search(inputRef.current.value)} variant="outline-success">Search</Button>
                        <Button onClick={() => randSearch()} variant="outline-success">Random</Button>
                    </Form >
                    <Nav.Link href="#login" className="hpLink" style={{ justifyContent: "end" }}>Sign-In</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >




    )
}

export default Header;