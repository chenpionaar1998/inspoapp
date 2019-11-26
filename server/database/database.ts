import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWROD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  ssl: true
});
  
export default pool;