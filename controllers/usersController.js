const db = require("../models")

module.exports = {
    signup: function(req,res) {
        db.User.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    login: function(req,res) {
        db.User.findOne({ email: req.body.email })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
}