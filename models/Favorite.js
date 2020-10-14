// empty

// drinkid (idDrink), name (strDrink), category (strCategory), alcoholic (boolean), instructions (strInstructions), imageURL (strDrinkThumb), ingredients + measurements (array, strIngredient1-?), SHARED (boolean)

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
  drinkId: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  alcoholic: { type: Boolean, required: true },
  imageURL: { type: String, required: true },
  instructions: { type: String, required: true },
  ingredients: { type: Array, required: true },
  ratings: { type: Array, required: false },
});

const Favorite = mongoose.model("Favorite", FavoriteSchema);

module.exports = Favorite;
