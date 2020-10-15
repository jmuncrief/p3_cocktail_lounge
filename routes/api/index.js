const router = require("express").Router();
const userRoutes = require("./users");
const recipeRoutes = require("./recipe")

// User routes
router.use("/users", userRoutes);

// recipe routes
router.use("/recipe", recipeRoutes)

module.exports = router;
