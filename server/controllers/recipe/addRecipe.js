const addRecipe = (req, res, next) => {
	console.log(req.body);
	next();

const Recipe = require('../models').Recipe;

  module.exports = {
  create(req, res) {
    return Recipe
      .create({
        recipeName: req.body.recipeName, 
        description: req.body.description,
        mealType: req.body.mealType,
        dishType: req.body.dishType,
        ingredients: req.body.ingredients,
        preparations: req.body.preparations,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
}; 
}

module.exports = addRecipe;
