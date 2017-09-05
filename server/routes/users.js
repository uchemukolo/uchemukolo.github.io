import express from 'express';
import userController from '../controllers/users';

const router = express.Router();

// api/v1/users/signup
router.post('/signup', userController.signup);
// api/v1/users/login
// router.post('/login', userController.login);

export default router;