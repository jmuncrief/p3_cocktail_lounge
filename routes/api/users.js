const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../config/passport");


// Matches with "/api/users/login"
router
    .route("/login")
    .post(passport.authenticate("local"), function (req, res) {
        res.json({
          message: "authenticated!",
          email: req.user.email,
          name: `${req.user.f_name} ${req.user.l_name}`,
          id: req.user._id
          // could we send back some kind of value that would update state and allow access to a page? 
        });
      });

// Matches with "/api/users/signup"
router
    .route("/signup")
    .post(usersController.signup);


module.exports = router;