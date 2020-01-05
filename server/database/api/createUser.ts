// Types
import { AccountInfoType } from '../../../client/src/Components/Account/Signup/SignUpForm';

// DB
import pool from '../database';

// Util
import { findUser } from './findUser';
import { hashPassword } from '../../utils/hash';

export async function signUp(formData: AccountInfoType): Promise<boolean> {
    // User not found, create the user
    const  foundUser = await findUser(formData.email);

    formData.password = hashPassword(formData.password);

    if (!foundUser){
        const result = await pool.query('INSERT INTO users VALUES ($1, $2, $3, $4);', 
        [formData.email, formData.password, formData.fname, formData.lname]).catch(err => {
            console.log("Create User Error: ", err);
            return false;
        });
        if(result){
            return true;
        }
    }
    // User already exists, send error indicating user exist
    return false;
    
}
