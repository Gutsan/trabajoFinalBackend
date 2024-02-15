import jwt from "jsonwebtoken"
import { KEY_TOKEN, PORT } from "../utils/config.js"
import { productModels } from "../models/productModels.js"


export class productController {
    static async getAllProduct(req, res) {
        const limit = 20
        const offset = 0
        try {
            const products = await productModels.getAllProduct(limit, offset)
            res.status(200).send(products)
        } catch (error) {

        }
    }
}