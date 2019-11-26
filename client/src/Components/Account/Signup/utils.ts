// Libraries
import { hashSync } from 'bcryptjs';

// Types
import { SignUpFormType } from './SignUpForm';

// DB actions
// import { createUser as createUserInDB } from '../../../../../server/Database/api/createUser';

export function createUser (formData: SignUpFormType): void {
    console.log(formData);
    formData.password = hashPassWord(formData.password);
    console.log(formData.password);

    fetch('/api/insertUser', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        // this.setState({ USERINSERTED: data.USERINSERTED });
        // if (this.state.USERINSERTED) {
        //   document.location.href = "/";
        // } 
        // else {
        //   window.alert("ERROR: user already exist");
        // }
      });
}

function hashPassWord (password: string): string {
    return hashSync(password, 10);
}