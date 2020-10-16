import React, { useRef, useState } from "react";
import { Button, Form, FormControl, Navbar, NavDropdown, Nav, Dropdown, DropdownButton } from 'react-bootstrap';
import "./Search.css";
import API from "../../utils/axiosCalls"



function Search() {

    const [headerState, setHeaderState] = useState({
        searchType: "Drink Name",
        dropdownTitle: "Search for:",
        query: ""

    })

    // Runs when dropdown value is changed; changes searchType
    function searchSelect(e) {
        setHeaderState({ ...headerState, searchType: e, dropdownTitle: e })
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
        <div>
            <Form inline className="text-center" >
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => setHeaderState({ ...headerState, query: e.target.value })} />

                <DropdownButton variant="danger" alignRight title={headerState.dropdownTitle} id="search-dropdown" onSelect={searchSelect}>
                    <Dropdown.Item eventKey="Drink Name">Drink Name</Dropdown.Item>
                    <Dropdown.Item eventKey="Ingredient">Ingredient</Dropdown.Item>
                </DropdownButton>

                <Button className="search-btn" onClick={() => search(headerState.query)} variant="outline-success">Search</Button>
                <Button className="search-btn"  onClick={() => randSearch()} variant="outline-success">Random</Button>
            </Form >
        </div>
    )

}

export default Search