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

export class favoriteModels {
  static async getAllFavorites(Limit, Offset, id) {
    const query =
      "SELECT p.id AS id, p.name AS name, p.img_url AS img, c.name AS category FROM likes l JOIN products p ON l.product_id = p.id JOIN category c ON p.category_id = c.id WHERE l.user_id = $1 LIMIT $2 OFFSET $3";
    const values = [id, Limit, Offset];
    const { rows } = await pool.query(query, values);

    return rows;
  }
  static async addFavorite(user_id, product_id) {
    const query = "INSERT INTO likes (user_id, product_id) VALUES ($1, $2);";
    const values = [user_id, product_id];
    const { rows } = await pool.query(query, values);
    return rows;
  }

  static async deleteFavorite(product_id, user_id) {
    const query = "DELETE FROM likes WHERE product_id = $1 and user_id = $2";
    const values = [product_id, user_id];
    const { rows } = await pool.query(query, values);
    return rows;
  }
}

// const query=""
// const values=[]
// const { rows } = await pool.query(query, values)
// return rows
