import { favoriteModels } from "../models/favoriteModels.js";

export class favoriteController {
  static async getAllFavorites(req, res) {
    const { id } = req.query;

    const limit = 20;
    const offset = 0;
    try {
      const favorites = await favoriteModels.getAllFavorites(limit, offset, id);
      res.status(200).send(favorites);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Ha ocurrido un error inesperado" });
    }
  }

  static async addFavorite(req, res) {
    const { user_id, product_id } = req.body;
    try {
      const favorites = await favoriteModels.addFavorite(user_id, product_id);
      res.status(200).send(favorites);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Ha ocurrido un error inesperado" });
    }
  }
  static async deleteFavorite(req, res) {
    const { product_id, user_id } = req.query;
    try {
      await favoriteModels.deleteFavorite(product_id, user_id);
      res.status(200).send("Eliminado exitosamente");
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Ha ocurrido un error inesperado" });
    }
  }
}
