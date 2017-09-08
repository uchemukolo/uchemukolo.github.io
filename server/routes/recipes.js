const express = require('express');
const recipeController = require('../controllers/recipe');

const router = express.Router();

// api/v1/users/signup
router.post('/', recipeController.addRecipe);
// api/v1/users/login
// router.post('/login', userController.login);

module.exports = router;