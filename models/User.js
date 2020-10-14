const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true, minlength: 8 },
  f_name: { type: String, required: true },
  l_name: { type: String, required: true },
  _favorites: [{ type: Schema.Types.ObjectId, ref: "Favorite" }],
  _customs: [{ type: Schema.Types.ObjectId, ref: "Custom" }],
});

UserSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (userPassword, cb) {
  bcrypt.compare(userPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;