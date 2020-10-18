const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

router.route("/custom").post(recipeController.addCustom)

router.route("/ids").post(recipeController.getCustRec)

router.route("/fave").post(recipeController.addFavorite)

router.route("/faves").post(recipeController.getFaveRec)

router.route("/onefave").post(recipeController.getOneFaveRec)

router.route("/onecust").post(recipeController.getOneCustRec)

module.exports = router;