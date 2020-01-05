// Types 
import { SignInFormType } from '../../../client/src/Components/Account/SignIn/SignInForm'

// DB
import pool from '../database';

// Util
import { findUser } from './findUser';
import { verifyPassword } from '../../utils/hash';

export async function signIn (formData: SignInFormType): Promise<boolean> {
    // Check if user exists in the db
    const foundUser = await findUser(formData.email);
    
    if (foundUser) {
        const user = await pool.query("SELECT password FROM users WHERE email=$1;", [formData.email]);

        if (verifyPassword(formData.password, user.rows[0].password)) {
            // Password matches, we can log the person in
            return true;
        }
        else {
            // Password does not match we cannot log the person in
            return false;
        }
    }

    // User does not exist, we cannot log the person in
    return false;
} 