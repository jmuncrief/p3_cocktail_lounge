const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router
    .route("/")
    .post(usersController.signup)

module.exports = router;