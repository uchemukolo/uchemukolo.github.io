import express from 'express';
import users from './users';
import recipe from './recipes';

const v1 = express.Router();

v1.use('/v1/users', users);
v1.use('/v1/recipes', recipe);

export default v1;