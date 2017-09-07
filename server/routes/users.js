const express = require('express');
const userController = require('../controllers/users');

const router = express.Router();

// api/v1/users/signup
router.post('/signup', userController.signup);
// api/v1/users/login
// router.post('/login', userController.login);

module.exports = router;