const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

router.route("/custom").post(recipeController.addCustom)

router.route("/:id").get(recipeController.getCustRec)

module.exports = router;