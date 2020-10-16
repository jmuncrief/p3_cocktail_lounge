import React, { useRef, useState } from "react";
import { Button, Form, FormControl, Navbar, NavDropdown, Nav, Dropdown, DropdownButton } from 'react-bootstrap';
import "./Search.css"
import API from "../../utils/axiosCalls"

function Search() {

    const [searchState, setSearchState] = useState({
        searchType: "Drink Name",
        dropdownTitle: "Search for:",
<<<<<<< HEAD
        query: "",
    })

    const [results, setResults] = useState([])
=======
        query: ""

    })
>>>>>>> 4136765f4c6d5efa5de7ac7b9fba32ef38418d5d

    // Runs when dropdown value is changed; changes searchType
    function searchSelect(e) {
        setSearchState({ ...searchState, searchType: e, dropdownTitle: e })
    }
<<<<<<< HEAD
    console.log("results: ", results)
    console.log("results: ", results)
=======
>>>>>>> 4136765f4c6d5efa5de7ac7b9fba32ef38418d5d

    async function search(query) {
        switch (searchState.searchType) {
            case "Ingredient": {
                const { data } = await API.filterIngredient(query)
<<<<<<< HEAD
                console.log("data.drinks: ", data.drinks)
                // handleResults(data.drinks)
                setResults(data.drinks)
            } break;
            case "Drink Name": {
                const { data } = await API.searchCocktailName(query)
                console.log("data.drinks: ", data.drinks)
                // handleResults(data.drinks)
                setResults(data.drinks)
=======
                console.log(data.drinks)
            } break;
            case "Drink Name": {
                const { data } = await API.searchCocktailName(query)
                console.log(data.drinks)
>>>>>>> 4136765f4c6d5efa5de7ac7b9fba32ef38418d5d
            } break;
            default:
                break;
        }

    }

    async function randSearch() {
        const { data } = await API.random()
        console.log(data.drinks[0])
    }

<<<<<<< HEAD
=======

>>>>>>> 4136765f4c6d5efa5de7ac7b9fba32ef38418d5d
    return (
        <div>
            <Form inline className="searchComp">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => setSearchState({ ...searchState, query: e.target.value })} />

<<<<<<< HEAD
                <DropdownButton alignRight title={searchState.dropdownTitle} id="search-dropdown" onSelect={searchSelect}>
=======
                <DropdownButton variant="danger" alignRight title={searchState.dropdownTitle} id="search-dropdown" onSelect={searchSelect}>
>>>>>>> 4136765f4c6d5efa5de7ac7b9fba32ef38418d5d
                    <Dropdown.Item eventKey="Drink Name">Drink Name</Dropdown.Item>
                    <Dropdown.Item eventKey="Ingredient">Ingredient</Dropdown.Item>
                </DropdownButton>

<<<<<<< HEAD
                <Button onClick={() => search(searchState.query)} variant="outline-success">Search</Button>
                <Button onClick={() => randSearch()} variant="outline-success">Random</Button>
=======
                <Button className="search-btn" onClick={() => search(searchState.query)} variant="outline-success">Search</Button>
                <Button className="search-btn" onClick={() => randSearch()} variant="outline-success">Random</Button>
>>>>>>> 4136765f4c6d5efa5de7ac7b9fba32ef38418d5d

            </Form>
        </div>
    )

}

export default Search