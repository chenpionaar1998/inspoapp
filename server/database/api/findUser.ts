// DB
import pool from '../database';

// Types
import { AccountInfoType } from '../../../client/src/Components/Account/Signup/SignUpForm';

export async function findUser (email: string): Promise<boolean> {
    console.log("FIND USER: ", email)
    
    const result = await pool.query("SELECT EXISTS(SELECT email FROM users WHERE email=$1);", [email]);

    console.log("RESULT: ", result.rows[0].exists)

    return result.rows[0].exists;
}

export async function getUser (email: string): Promise<AccountInfoType> {
    pool.connect();
    const user = await pool.query("SELECT * FROM users WHERE email=$1;", [email]);
    
    return user.rows[0] as unknown as AccountInfoType;
} 