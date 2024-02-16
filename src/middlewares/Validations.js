import { usersModel } from "../models/userModels.js"
import { KEY_TOKEN } from "../utils/config.js"
import jwt from "jsonwebtoken"


export const validateUser = async (req, res, next) => {
    const { email, password } = req.body
    console.log(req.body)
    if (email) {
        const [user] = await usersModel.getUser(email)
        const isPassword = (password === user.password)
        req.validUser = user && isPassword
        next()
    } else {
        req.validUser = false
    }
}

export const validateToken = async (req, res, next) => {
    const authorization = req.header("Authorization")
    if (!authorization) {
        res.status(401).send({ message: "Token no ingresado" })
    } else {
        try {
            const token = authorization.split("Bearer ")[1]
            const validToken = jwt.verify(token, KEY_TOKEN)
            req.validToken = validToken
            next()
        }
        catch (error) {
            console.log(error)
            res.status(401).send({ message: "Token invalido" })
        }
    }
}