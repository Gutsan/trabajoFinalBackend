import jwt from "jsonwebtoken";
import { KEY_TOKEN, PORT } from "../utils/config.js";
import { usersModel } from "../models/userModels.js";

export class userController {
  static async login(req, res) {
    let { email } = req.body;
    email = email.toLowerCase()
    try {
      const ValidUser = req.validUser;
      if (ValidUser) {
        const token = jwt.sign({ email }, KEY_TOKEN);
        res.status(200).send({ token });
      } else {
        res.status(401).send({ message: "Email o contraseña incorrecta" });
      }
    } catch (error) {
      res.status(500).send({ message: "Ha ocurrido un error inesperado", email: email, KEY_TOKEN: KEY_TOKEN, error: error });
    }
  }
  static async getUser(req, res) {
    const validToken = req.validToken;
    try {
      if (validToken) {
        const user = await usersModel.getUser(validToken.email.toLowerCase());
        const jsonUser = generateJsonUser(user);
        res.status(200).send(jsonUser);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Ha ocurrido un error inesperado" });
    }
  }
  static async createUser(req, res) {
    const { name, email, password, phone, rol } = req.body;
    try {
      const user = await usersModel.createtUser(
        name,
        email.toLowerCase(),
        password,
        phone,
        rol
      );
      res.status(201).send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Ha ocurrido un error inesperado" });
    }
  }
  static async modifyUser(req, res) {
    const { name, email, phone } = req.body;
    const validToken = req.validToken;
    try {
      if (validToken) {
        const password = req.password
        const user = await usersModel.getUser(validToken.email.toLowerCase());
        const { id, rol } = user[0];
        const userModify = await usersModel.modifyUser(
          id,
          name,
          email.toLowerCase(),
          password,
          phone,
          rol
        );
        res.status(201).send(userModify);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Ha ocurrido un error inesperado" });
    }
  }
  static async deleteUser(req, res) {
    const { id } = req.params;
    try {
      const user = await usersModel.deleteUser(id);
      res.status(201).send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Ha ocurrido un error inesperado" });
    }
  }
  static async getallUser(req, res) {
    try {
      const users = await usersModel.getAllUser();
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send({ message: "Ha ocurrido un error inesperado" });
    }
  }
}

const generateJsonUser = (user) => {
  const { id, name, email, phone, rol } = user[0];
  const addressesURL = `http://localhost:${PORT}/user/${id}/direcciones`;
  const pedidosURL = `http://localhost:${PORT}/user/${id}/pedidos`;
  const favoritosURL = `http://localhost:${PORT}/user/${id}/Favoritos`;
  return {
    id,
    name,
    email,
    phone,
    rol,
    addressesURL,
    pedidosURL,
    favoritosURL,
  };
};
