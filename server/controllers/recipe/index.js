const addRecipe = require('./addRecipe.js');
const modifyRecipe = require('./modifyRecipe.js');
const addReview = require('./addReview.js'); 

const recipeController = {
	addRecipe,
	modifyRecipe, 
	addReview,

};

module.exports = recipeController;