import jwt from "jsonwebtoken"
import { KEY_TOKEN } from "../utils/config.js"

export class userController {
    static async login(req, res) {
        const { email } = req.body
        try {
            const ValidUser = req.validUser
            if (ValidUser) {
                const token = jwt.sign({ email }, KEY_TOKEN)
                res.status(200).send({ token })
            } else {
                res.status(400).send(({ message: "Email o contraseña incorrecta" }))
            }
        } catch (error) {
            res.status(500).send(({ message: "Ha ocurrido un error inesperado" }))
        }
    }
}