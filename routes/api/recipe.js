const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

router.route("/custom").post(recipeController.addCustom)

module.exports = router;