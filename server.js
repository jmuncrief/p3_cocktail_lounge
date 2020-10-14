const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");
const app = express();
const passport = require("./config/passport");

require("dotenv").config();
const logger = require("morgan");

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: process.env.SECRET, resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cocktail_lounge", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
