// Modules
import axios from "axios";

// Globals
const queryURL = "https://www.thecocktaildb.com/api/json/v1/1/"

const searchType = {
    searchCocktailName: "search.php?s=",
    searchIngredientName: "search.php?i=",
    lookupCocktailID: "lookup.php?i=",
    lookupIngredientID: "lookup.php?iid=",
    filterIngredient: "filter.php?i=",
    random: "random.php"
}

export default {
    searchCocktailName: function(query) {
        return axios.get(queryURL + searchType.searchCocktailName + query)
    },
    searchIngredientName: function(query) {
        return axios.get(queryURL + searchType.searchIngredientName + query)
    },
    lookupCocktailID: function(query) {
        return axios.get(queryURL + searchType.lookupCocktailID + query)
    },
    lookupIngredientID: function(query) {
        return axios.get(queryURL + searchType.lookupIngredientID + query)
    },
    filterIngredient: function(query) {
        return axios.get(queryURL + searchType.filterIngredient + query)
    },
    random: function() {
        return axios.get(queryURL + searchType.random)
    },
}