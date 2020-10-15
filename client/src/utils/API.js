import axios from "axios";

export default {
    newUser: function(userInfo) {
        return axios.post("/api/users/signup", userInfo);
    }
}