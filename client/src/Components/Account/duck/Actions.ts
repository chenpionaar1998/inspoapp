// Libraries
import { Dispatch } from "redux";
import { batch } from "react-redux";

// Types
import { AccountInfoType } from "../Signup/SignUpForm";
import { SignInFormType } from "../SignIn/SignInForm";
import  { ISignUpUserAction,
        SIGN_UP_USER_ACTION, 
        SIGN_IN_USER_ACTION, 
        UPDATE_ACCOUNT_SIGNED_IN_ACTION,
        SignUpUserAction, 
        ISignInUserAction, 
        SignInUserAction,
        IUpdateAccountSignedInAction
} from './Types';

export function createUser (formData: AccountInfoType): SignUpUserAction {
    return (dispatch: Dispatch<ISignUpUserAction>) => {
        fetch('/api/createUser', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          })
          .then(response => response.json())
          .then(result => {
            if (result.createUser) {
                return dispatch(updateAccountWithSignUp(formData));
            }
            else {
                // dispatch error state
            }
          });
    }
}

export function signInUser (formData: SignInFormType): SignInUserAction {
    return (dispatch: Dispatch) => {
        fetch('/api/signInUser', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(result => {
            if (result.user) {
                return batch(() => {
                    dispatch(updateAccountWithSignIn(result.user));
                    dispatch(updateAccountSignedIn(true));
                });            }
            else {
                // dispatch error state
            }
        })
    }
}

function updateAccountWithSignUp (formData: AccountInfoType): ISignUpUserAction {
    return {
        type: SIGN_UP_USER_ACTION,
        userName: formData.email,
        fname: formData.fname,
        lname: formData.lname
    }
}

function updateAccountWithSignIn (formData: AccountInfoType): ISignInUserAction {
    return {
        type: SIGN_IN_USER_ACTION,
        userName: formData.email,
        fname: formData.fname,
        lname: formData.lname
    }
}

function updateAccountSignedIn (signedIn: boolean): IUpdateAccountSignedInAction {
    return {
        type: UPDATE_ACCOUNT_SIGNED_IN_ACTION,
        signedIn
    }
} 