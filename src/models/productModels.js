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

export class productModels {
  static async getAllProduct(Limit, Offset) {
    console.log(Limit, Offset);
    const query =
      "SELECT p.*, c.name AS category FROM products p JOIN category c ON p.category_id = c.id  LIMIT $1 OFFSET $2";
    const values = [Limit, Offset];
    const { rows } = await pool.query(query, values);
    console.log("ahora acá");
    return rows;
  }
  static async getIdCategory(name) {
    const query = "SELECT id FROM category WHERE name=$1";
    const values = [name];
    const { rows } = await pool.query(query, values);
    return rows;
  }
  static async getProductForCategory(category_id, Limit, Offset) {
    const query =
      "SELECT * FROM products WHERE category_id=$1 LIMIT=$2 OFFSET=$3";
    const values = [category_id, Limit, Offset];
    const { rows } = await pool.query(query, values);
    return rows;
  }
  static async createProduct(
    name,
    description,
    img_url,
    price,
    stock,
    category_id
  ) {
    const query =
      "INSERT INTO product (id,name, description, img_url, price, stock, category_id) VALUES (DEFAULT,$1,$2,$3,$4,$5,$6)";
    const values = [name, description, img_url, price, stock, category_id];
    const { rows } = await pool.query(query, values);
    return rows;
  }
  static async modifyProduct() {
    const query = "";
    const values = [];
    const { rows } = await pool.query(query, values);
    return rows;
  }
  static async deleteProduct() {
    const query = "";
    const values = [];
    const { rows } = await pool.query(query, values);
    return rows;
  }
}

// const query=""
// const values=[]
// const { rows } = await pool.query(query, values)
// return rows
