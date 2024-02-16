import jwt from "jsonwebtoken"
import { KEY_TOKEN, PORT } from "../utils/config.js"
import { usersModel } from "../models/userModels.js"

export class userController {
    static async login(req, res) {
        const { email } = req.body
        try {
            const ValidUser = req.validUser
            if (ValidUser) {
                const token = jwt.sign({ email }, KEY_TOKEN)
                res.status(200).send({ token })
            } else {
                res.status(401).send(({ message: "Email o contraseña incorrecta" }))
            }
        } catch (error) {
            res.status(500).send(({ message: "Ha ocurrido un error inesperado" }))
        }
    }
    static async getUser(req, res) {
        const validToken = req.validToken
        try {
            if (validToken) {
                const user = await usersModel.getUser(validToken.email)
                const jsonUser = generateJsonUser(user)
                res.status(200).send(jsonUser)
            }
        } catch (error) {
            console.log(error)
            res.status(500).send(({ message: "Ha ocurrido un error inesperado" }))
        }
    }
    static async createUser(req, res) {
        const { name, email, password, phone, rol } = req.body
        try {
            const user = await usersModel.createtUser(name, email, password, phone, rol)
            res.status(201).send(user)
        } catch (error) {
            console.log(error)
            res.status(500).send(({ message: "Ha ocurrido un error inesperado" }))
        }
    }
    static async modifyUser(req, res) {
        const { id, name, email, password, phone, rol } = req.body
        try {
            const user = await usersModel.modifyUser(id, name, email, password, phone, rol)
            res.status(201).send(user)
        } catch (error) {
            console.log(error)
            res.status(500).send(({ message: "Ha ocurrido un error inesperado" }))
        }
    }
    static async deleteUser(req, res) {
        const { id } = req.body
        try {
            const user = await usersModel.deleteUser(id)
            res.status(201).send(user)
        } catch (error) {
            console.log(error)
            res.status(500).send(({ message: "Ha ocurrido un error inesperado" }))
        }
    }
}

const generateJsonUser = (user) => {
    const { id, name, email, phone, rol } = user[0]
    const addressesURL = `http://localhost:${PORT}/user/${id}/direcciones`
    const pedidosURL = `http://localhost:${PORT}/user/${id}/pedidos`
    const favoritosURL = `http://localhost:${PORT}/user/${id}/Favoritos`
    return ({ id, name, email, phone, rol, addressesURL, pedidosURL, favoritosURL })
}