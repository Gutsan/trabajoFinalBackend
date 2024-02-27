import express from "express";
import { cartController } from "../controller/cartController.js";

export const cartRoutes = express.Router();

cartRoutes.get("/", cartController.getCarrito);
cartRoutes.post("/", cartController.addProductoCarrito);
cartRoutes.delete("/:id", cartController.deleteCarrito);
cartRoutes.put("/", cartController.modifyCarritoById);
