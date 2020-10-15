const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../config/passport");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

// Matches with "/api/users/login"
router
  .route("/login")
  .post(passport.authenticate("local"), function (req, res) {
    res.json({
      message: "authenticated!",
      email: req.user.email,
      name: `${req.user.f_name} ${req.user.l_name}`,
      id: req.user._id,
    });
  });

router.route("/members").get(isAuthenticated, function (req, res) {
  console.log(req.user);
  res.json({
    id: req.user._id,
    name: `${req.user.f_name} ${req.user.l_name}`,
    favorites: req.user._favorites,
    customs: req.user._customs
  });
});

// Matches with "/api/users/signup"
router.route("/signup").post(usersController.signup);

module.exports = router;
