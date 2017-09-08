const modifyRecipe = (req, res, next) => {
	console.log(req.body);
	next();

const Recipe = require('../models').Recipe;

  module.exports = {
  update(req, res) {
    return Recipe
      .update({
        recipeName: req.body.recipeName, 
        description: req.body.description,
        mealType: req.body.mealType,
        dishType: req.body.dishType,
        ingredients: req.body.ingredients,
        preparations: req.body.preparations,
      })
      .then(recipe => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
}; 
}

module.exports = modifyRecipe;
