// DB
import pool from '../database';

export async function findUser (email: string): Promise<boolean> {
    const client = await pool.connect();
    const result = await client.query("SELECT EXISTS(SELECT email FROM users WHERE email=$1);", [email]);

    return result.rows[0].exists;
}