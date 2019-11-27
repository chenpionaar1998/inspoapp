// Types
import { SignUpFormType } from "../Signup/SignUpForm";
import  { ISignUpUserAction, SIGN_UP_USER_ACTION, SignUpUserAction } from './Types';
import { Dispatch } from "redux";

export function createUser (formData: SignUpFormType): SignUpUserAction {
    return (dispatch: Dispatch<ISignUpUserAction>) => {
        fetch('/api/insertUser', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          })
          .then(response => response.json())
          .then(result => {
              if (result.createUser) {
                return dispatch(updateAccount(formData));
              }
              else {
                // dispatch error state
              }
          });
    }
}

function updateAccount (formData: SignUpFormType): ISignUpUserAction {
    return {
        type: SIGN_UP_USER_ACTION,
        account: {
            userName: formData.email,
            fname: formData.fname,
            lname: formData.lname
        }
    }
}