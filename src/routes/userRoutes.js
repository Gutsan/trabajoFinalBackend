import express from 'express';
import { validateToken, validateUser } from '../middlewares/Validations.js';
import { userController } from '../controller/usersController.js';

export const loginRoutes = express.Router();
export const userRoutes = express.Router();

loginRoutes.post("/", validateUser, userController.login)

userRoutes.get("/", validateToken, userController.getUser)
userRoutes.post("/", userController.createUser)
userRoutes.put("/", userController.modifyUser)
userRoutes.delete("/", userController.deleteUser)