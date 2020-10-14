let all = {
    "strIngredient1": "Light rum",
    "strIngredient2": "Lime",
    "strIngredient3": "Sugar",
    "strIngredient4": "Mint",
    "strIngredient5": "Soda water",
    "strIngredient6": null,
    "strIngredient7": null,
    "strIngredient8": null,
    "strIngredient9": null,
    "strIngredient10": null,
    "strIngredient11": null,
    "strIngredient12": null,
    "strIngredient13": null,
    "strIngredient14": null,
    "strIngredient15": null,
    "strMeasure1": "2-3 oz ",
    "strMeasure2": "Juice of 1 ",
    "strMeasure3": "2 tsp ",
    "strMeasure4": "2-4 ",
    "strMeasure5": null,
    "strMeasure6": null,
    "strMeasure7": null,
    "strMeasure8": null,
    "strMeasure9": null,
    "strMeasure10": null,
    "strMeasure11": null,
    "strMeasure12": null,
    "strMeasure13": null,
    "strMeasure14": null,
    "strMeasure15": null,
}

// let ing = {
//     "strIngredient1": "Light rum",
//     "strIngredient2": "Lime",
//     "strIngredient3": "Sugar",
//     "strIngredient4": "Mint",
//     "strIngredient5": "Soda water",
// }

// let mes = {
//     "strMeasure1": "2-3 oz ",
//     "strMeasure2": "Juice of 1 ",
//     "strMeasure3": "2 tsp ",
//     "strMeasure4": "2-4 ",
//     "strMeasure5": null,
// }

function createIngMesObjs(obj) {

    for (const prop in obj) {
        // RegEx
        let reI = new RegExp('strIngredient\d')
        let reM = new RegExp('strMeasure\d')

        let ingArr;
        let mesArr;

        if (prop.match(reI)) {
            if(obj[prop]) {
                ingArr.push(obj[prop])
            }
        } else if (prop.match(reM)) {
            mesArr.push(obj[prop])
        }
    }
}

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