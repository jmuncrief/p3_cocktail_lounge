function sanitizeIngredientsIntoArray(data) {
  const ingredients = []

  for (let i=1; i < 16; i++) {
    const ing = "strIngredient" + i
    if(data[ing]) {
      ingredients[i] = data[ing] + " - " + data["strMeasure" + i]
    }
  }
  return ingredients

}

export default sanitizeIngredientsIntoArray
