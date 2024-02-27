import pkg from "pg";
const { Pool } = pkg;
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USER } from "../utils/config.js";

const pool = new Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  allowExitOnIdle: true,
});

export class cartModels {
  static async getCarrito(Limit, Offset, id) {
    const query =
      "SELECT t.carrito_id AS id, p.id AS product_id, p.name AS name, p.img_url AS img, t.precio AS precio, t.cantidad AS cantidad, t.opcion AS opcion, c.name AS category FROM cart t JOIN products p ON t.product_id = p.id JOIN category c ON p.category_id = c.id WHERE t.user_id = $1 LIMIT $2 OFFSET $3";
    const values = [id, Limit, Offset];
    const { rows } = await pool.query(query, values);
    return rows;
  }

  static async addProductoCarrito(
    user_id,
    product_id,
    cantidad,
    opcion,
    precio
  ) {
    const query =
      "INSERT INTO cart (user_id, product_id, cantidad, opcion, precio) VALUES ($1, $2, $3, $4, $5);";
    const values = [user_id, product_id, cantidad, opcion, precio];
    const { rows } = await pool.query(query, values);
    return rows;
  }

  static async deleteCarrito(id) {
    const query = "DELETE FROM cart WHERE carrito_id = $1";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows;
  }

  static async modifyCarritoById(id, cantidad, opcion, user_id) {
    const query =
      "UPDATE cart SET cantidad = $1 WHERE product_id = $2 AND opcion = $3 AND user_id = $4";
    const values = [cantidad, id, opcion, user_id];
    const { rows } = await pool.query(query, values);
    return rows;
  }
}
