// Types
import { SignUpFormType } from '../../../client/src/Components/Account/Signup/SignUpForm';

// DB
import pool from '../database';

// Util
// import { findUser } from './findUser';

export async function createUser(formData: SignUpFormType): Promise<void> {
    return pool.query('INSERT INTO users VALUES ($1, $2, $3, $4);', [formData.email, formData.password, formData.fname, formData.lname], 
    function (err, res) {
        if (err){
            console.log("THIS IS AN ERROR");
            console.log(err);
        }
        else {
            console.log(res);
            console.log("success");
        }
    });
}
