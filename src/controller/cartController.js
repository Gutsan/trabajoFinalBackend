import { cartModels } from "../models/cartModels.js";

export class cartController {
  static async getCarrito(req, res) {
    const userId = req.query.userId;

    const limit = 20;
    const offset = 0;
    try {
      const carrito = await cartModels.getCarrito(limit, offset, userId);
      res.status(200).send(carrito);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Ha ocurrido un error inesperado" });
    }
  }

  static async addProductoCarrito(req, res) {
    const { user_id, product_id, cantidad, opcion, precio } = req.body;
    try {
      const carrito = await cartModels.addProductoCarrito(
        user_id,
        product_id,
        cantidad,
        opcion,
        precio
      );
      res.status(200).send(carrito);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Ha ocurrido un error inesperado" });
    }
  }
  static async deleteCarrito(req, res) {
    const { id } = req.params;
    try {
      await cartModels.deleteCarrito(id);
      res.status(200).send("elemento eliminado exitosamente");
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Ha ocurrido un error inesperado" });
    }
  }

  static async modifyCarritoById(req, res) {
    const { id, cantidad, opcion, user_id } = req.body;

    try {
      const response = await cartModels.modifyCarritoById(
        id,
        cantidad,
        opcion,
        user_id
      );
      res.status(200).send("Cantidad modificada correctamente");
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Ha ocurrido un error inesperado" });
    }
  }
}
