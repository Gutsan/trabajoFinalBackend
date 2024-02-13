import { usersModel } from "../models/userModels.js"

export const validateUser = async (req, res, next) => {
    const { email, password } = req.body

    const [user] = await usersModel.getUser(email)
    const isPassword = (password === user.password)
    req.validUser = user && isPassword
    next()
}
