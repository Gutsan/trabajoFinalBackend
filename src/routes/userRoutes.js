import express from 'express';
import { validateUser } from '../middlewares/Validations.js';
import { userController } from '../controller/usersController.js';

export const loginRoutes = express.Router();

loginRoutes.get("/", validateUser, userController.login)

