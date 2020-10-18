import axios from "axios";

export default {
    newUser: function(userInfo) {
        return axios.post("/api/users/signup", userInfo);
    },
    newCustom: function(recipeData) {
        return axios.post("/api/recipe/custom", recipeData);
    },
    getCustoms: function(ids) {
        return axios.post("/api/recipe/ids", ids)
    },
    addFavorite: function(recipeData) {
        return axios.post("/api/recipe/fave", recipeData)
    },
    getFavorites: function(ids) {
        return axios.post("api/recipe/faves", ids)
    },
    getOneFaveRecipe: function(name) {
        return axios.post("api/recipe/onefave", {key: name})
    },
    getOneCustRecipe: function(name) {
        return axios.post("api/recipe/onecust", {key: name})
    }
}