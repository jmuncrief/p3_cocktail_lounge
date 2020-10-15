import React, { useRef, useState } from "react";
import { Button, Form, FormControl, Navbar, NavDropdown, Nav, Dropdown, DropdownButton } from 'react-bootstrap';
import "./Search.css"
import API from "../../utils/axiosCalls"

function Search() {

    const [searchState, setSearchState] = useState({
        searchType: "Drink Name",
        dropdownTitle: "Search for:",
        query: "",
        searchResults: []
    })

    // Runs when dropdown value is changed; changes searchType
    function searchSelect(e) {
        setSearchState({ ...searchState, searchType: e, dropdownTitle: e })
    }

    function handleResults(results) {
        console.log("Results: ", results)
        setSearchState({ ...searchState, searchResults: results })
        console.log("function ran!")
        console.log("State: ", searchState)
    }

    async function search(query) {
        switch (searchState.searchType) {
            case "Ingredient": {
                const { data } = await API.filterIngredient(query)
                console.log("data.drinks: ", data.drinks)
                // handleResults(data.drinks)
                setSearchState({...searchState, searchResults: data.drinks})
                console.log("searchState.searchResults: ", searchState.searchResults)
            } break;
            case "Drink Name": {
                const { data } = await API.searchCocktailName(query)
                console.log("data.drinks: ", data.drinks)
                // handleResults(data.drinks)
                setSearchState({...searchState, searchResults: data.drinks})
                console.log("searchState.searchResults: ", searchState.searchResults)
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
            <Form inline className="searchComp">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => setSearchState({ ...searchState, query: e.target.value })} />

                <DropdownButton alignRight title={searchState.dropdownTitle} id="search-dropdown" onSelect={searchSelect}>
                    <Dropdown.Item eventKey="Drink Name">Drink Name</Dropdown.Item>
                    <Dropdown.Item eventKey="Ingredient">Ingredient</Dropdown.Item>
                </DropdownButton>

                <Button onClick={() => search(searchState.query)} variant="outline-success">Search</Button>
                <Button onClick={() => randSearch()} variant="outline-success">Random</Button>

            </Form>
        </div>
    )

}

export default Search