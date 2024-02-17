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
            console.log(error)
            res.status(500).send(({ message: "Ha ocurrido un error inesperado" }))
        }
    }
    static async getProductForId(req, res) {
        const { id } = req.params
        console.log(id)
        try {
            const products = await productModels.getProductForId(id)
            res.status(200).send(products)
        } catch (error) {
            console.log(error)
            res.status(500).send(({ message: "Ha ocurrido un error inesperado" }))
        }
    }
    static async getProductForCategory(req, res) {
        const { id_category } = req.params
        try {
            const products = await productModels.getProductForCategory(id_category)
            res.status(200).send(products)
        } catch (error) {
            console.log(error)
            res.status(500).send(({ message: "Ha ocurrido un error inesperado" }))
        }
    }
}