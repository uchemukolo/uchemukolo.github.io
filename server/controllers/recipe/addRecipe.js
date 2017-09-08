// const addRecipe = (req, res, next) => {
// 	console.log(req.body);
// 	next();

// const Recipe = require('../../models/index').Recipe;

//   module.exports = {
//   create(req, res) {
//     return Recipe
//       .create({
//         recipeName: req.body.recipeName, 
//         description: req.body.description,
//         mealType: req.body.mealType,
//         dishType: req.body.dishType,
//         ingredients: req.body.ingredients,
//         preparations: req.body.preparations,
//       })
//       .then(user => res.status(201).send(user))
//       .catch(error => res.status(400).send(error));
//   },
// }; 
// }

// module.exports = addRecipe;


import { Recipe } from '../../models/index';

const addRecipe = (req, res) => {
 const { recipeName, description, mealType, dishType, ingredients, preparations } = req.body
  console.log(recipeName, description, mealType, dishType, ingredients, preparations); 
  // console.log(req);
  // console.log(Recipe);

  if(!recipeName || !description || !mealType || !dishType || !ingredients || !preparations){
    return res.status(400).send("Enter All required field")
  }

   return Recipe.create({
        name: req.body.recipeName, 
        description: req.body.description,
        mealType: req.body.mealType,
        dishType: req.body.dishType,
        ingredients: req.body.ingredients,
        preparations: req.body.preparations,
      })
      .then(recipe => res.status(201).send(recipe))
      .catch(error => res.status(400).send(error));
  }


module.exports = addRecipe;

