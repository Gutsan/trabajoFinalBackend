import express from 'express';
import { productController } from '../controller/productController.js';



export const productRoutes = express.Router();

productRoutes.get("/", productController.getAllProduct)