import React, { useRef, useState } from "react";
import { Button, Form, FormControl, Navbar, NavDropdown, Nav, Dropdown, DropdownButton } from 'react-bootstrap';
import Cocktail from "../Card/Card"
import "./Search.css"
import API from "../../utils/axiosCalls"

function Search() {

    const [searchState, setSearchState] = useState({
        searchType: "Drink Name",
        dropdownTitle: "Search for:",
        query: "",
    })

    const [results, setResults] = useState([])

    // Runs when dropdown value is changed; changes searchType
    function searchSelect(e) {
        setSearchState({ ...searchState, searchType: e, dropdownTitle: e })
    }

    async function search(query) {
        switch (searchState.searchType) {
            case "Ingredient": {
                const { data } = await API.filterIngredient(query)
                setResults(data.drinks)
            } break;
            case "Drink Name": {
                const { data } = await API.searchCocktailName(query)
                setResults(data.drinks)
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
        <>
        <div>
            <Form inline className="searchComp">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => setSearchState({ ...searchState, query: e.target.value })} />

                <DropdownButton variant="danger" alignRight title={searchState.dropdownTitle} id="search-dropdown" onSelect={searchSelect}>
                    <Dropdown.Item eventKey="Drink Name">Drink Name</Dropdown.Item>
                    <Dropdown.Item eventKey="Ingredient">Ingredient</Dropdown.Item>
                </DropdownButton>

                <Button className="search-btn" onClick={() => search(searchState.query)} variant="outline-success">Search</Button>
                <Button className="search-btn" onClick={() => randSearch()} variant="outline-success">Random</Button>

            </Form>
        </div>
        <div>
            {
                results.forEach(element => {
                    return(
                        // console.log(element.idDrink, element.strDrink, element.strDrinkThumb)
                        <Cocktail id={element.idDrink} name={element.strDrink} img={element.strDrinkThumb}/>
                    )
                })
            }
        </div>






        </>
    )

}

export default Search