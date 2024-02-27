import express from "express";
import { favoriteController } from "../controller/favoriteController.js";

export const favoriteRoutes = express.Router();

favoriteRoutes.get("/", favoriteController.getAllFavorites);
favoriteRoutes.post("/", favoriteController.addFavorite);
favoriteRoutes.delete("/", favoriteController.deleteFavorite);
