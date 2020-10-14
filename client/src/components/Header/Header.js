import React, { useRef, useState } from "react";
import { Button, Form, FormControl, Navbar, NavDropdown, Nav, Dropdown, DropdownButton } from 'react-bootstrap';
import "./Header.css";
import API from "../../utils/axiosCalls"



function Header() {

    const [headerState, setHeaderState] = useState({
        searchType: "Drink Name",
        dropdownTitle: "Search for:",
        query: ""

      })

    // Runs when dropdown value is changed; changes searchType
    function searchSelect(e) {
        setHeaderState({...headerState, searchType: e, dropdownTitle: e})
    }

    async function search(query) {
        switch (headerState.searchType) {
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
            <Navbar.Brand href="/home" id="title">Cocktail Lounge</Navbar.Brand>
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
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => setHeaderState({...headerState, query: e.target.value})} />

                        <DropdownButton alignRight title={headerState.dropdownTitle} id="search-dropdown" onSelect={searchSelect}>
                            <Dropdown.Item eventKey="Drink Name">Drink Name</Dropdown.Item>
                            <Dropdown.Item eventKey="Ingredient">Ingredient</Dropdown.Item>
                        </DropdownButton>

                        <Button onClick={() => search(headerState.query)} variant="outline-success">Search</Button>
                        <Button onClick={() => randSearch()} variant="outline-success">Random</Button>
                    </Form >
                    <Nav.Link href="/logins" className="hpLink" style={{ justifyContent: "end" }}>Sign-In</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Header;