const db = require("../models");

module.exports = {
  addCustom: function (req, res) {
    db.Custom.create(req.body)
      .then(({ _id }) =>
        db.User.findOneAndUpdate(
          {},
          { $push: { _customs: _id } },
          { new: true }
        )
      )
      .then((dbUser) => {
        res.json(dbUser);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  getCustRec: function (req, res) {
    db.Custom.find({ _id: { $in: req.body } }).then((dbCust) => {
      res.json(dbCust);
    });
  },
  addFavorite: function (req, res) {
    db.Favorite.create(req.body)
      .then(({ _id }) =>
        db.User.findOneAndUpdate(
          {},
          { $push: { _favorites: _id } },
          { new: true }
        )
      )
      .then((dbFave) => {
        res.json(dbFave);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  getFaveRec: function (req, res) {
    db.Favorite.find({ _id: { $in: req.body } }).then((dbFave) => {
      res.json(dbFave);
    });
  },
  getOneFaveRec: function (req, res) {
      console.log(req.body.abc);
    db.Favorite.findOne({ name: req.body.abc }).then((dbFave) => {
      res.json(dbFave);
    });
  },
  getOneCustRec: function (req, res) {
    db.Custom.findOne({ name: req.body }).then((dbCust) => {
      res.json(dbCust);
    });
  },
};
