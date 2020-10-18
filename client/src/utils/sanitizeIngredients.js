function sanitizeIngredients(data) {
    const ingredients = {};
    for (let i = 1; i < 16; i++) {
      const key = "strIngredient" + i;
      if (data[key]) {
        ingredients[data[key]] = data["strMeasure" + i];
      }
    }
    return ingredients;
}

export default sanitizeIngredients