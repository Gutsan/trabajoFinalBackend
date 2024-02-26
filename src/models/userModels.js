import pkg from 'pg';
const { Pool } = pkg;
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USER } from '../utils/config.js'

const pool = new Pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    allowExitOnIdle: true
})


export class usersModel {
    static async getUser(email) {
        const query = 'SELECT * FROM users WHERE email=$1'
        const values = [email]
        const { rows } = await pool.query(query, values)
        return rows
    }
    static async createtUser(name, email, password, phone, rol) {
        const query = "INSERT INTO users VALUES(DEFAULT,$1,$2,$3,$4,$5)"
        const values = [name, email, password, phone, rol]
        const { rows } = await pool.query(query, values)
        return rows
    }
    static async modifyUser(id, name, email, password, phone, rol) {
        const query = "UPDATE users SET name=$1,email=$2,password=$3,phone=$4,rol=$5 WHERE id=$6"
        const values = [name, email, password, phone, rol, id]
        const { rows } = await pool.query(query, values)
        return rows
    }
    static async deleteUser(id) {
        const query = "DELETE FROM users WHERE id=$1"
        const values = [id]
        const { rows } = await pool.query(query, values)
        return rows
    }
    static async getAllUser() {
        const query = 'SELECT * FROM'
        const { rows } = await pool.query(query)
        return rows
    }
}