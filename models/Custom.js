const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomSchema = new Schema({
  name: { type: String, required: true },
  alcoholic: { type: Boolean, required: true },
  instructions: { type: String, required: true },
  ingredients: { type: Array, required: true },
  ratings: {type: Array, required: false },
  shared: { type: Boolean, required: true },
});

const Custom = mongoose.model("Custom", CustomSchema);

module.exports = Custom;
