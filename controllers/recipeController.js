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
};
