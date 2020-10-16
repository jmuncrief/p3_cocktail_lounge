const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

router.route("/custom").post(recipeController.addCustom)

router.route("/ids").post(recipeController.getCustRec)

router.route("/fave").post(recipeController.addFavorite)

module.exports = router;