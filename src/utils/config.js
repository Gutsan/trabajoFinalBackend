import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();
export const PORT = 3000;

export const DB_HOST = "localhost";
export const DB_USER = "postgres";
export const DB_PASSWORD = "postgres";
export const DB_DATABASE = "oregano";
export const KEY_TOKEN = crypto.randomBytes(32).toString("hex");
