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
}