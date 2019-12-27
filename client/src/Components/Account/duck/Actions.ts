// Libraries
import { Dispatch } from "redux";
import { batch } from "react-redux";

// Types
import { AccountInfoType } from "../Signup/SignUpForm";
import { SignInFormType } from "../SignIn/SignInForm";
import {UPDATE_USER_INFO_ACTION, 
        UPDATE_ACCOUNT_SIGNED_IN_ACTION,
        IUpdateUserInfoAction,
        IUpdateAccountSignedInAction,
        UpdateUserInfoAction
} from './Types';

export function createUser (formData: AccountInfoType): UpdateUserInfoAction {
    return (dispatch: Dispatch) => {
        fetch('/api/createUser', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          })
          .then(response => response.json())
          .then(result => {
            if (result.correctUser) {
                return batch(() => {
                    dispatch(updateAccount(result.user));
                    dispatch(updateAccountSignedIn(true));
                });                 
            }
            else {
                dispatch(updateAccountSignedIn(false));
                window.alert("The username is already taken");
            }
          });
    }
}

export function signInUser (formData: SignInFormType): UpdateUserInfoAction {
    return (dispatch: Dispatch) => {
        fetch('/api/signInUser', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(result => {
            if (result.correctUser) {
                return batch(() => {
                    dispatch(updateAccount(result.user));
                    dispatch(updateAccountSignedIn(true));
                });
            }
            else {
                dispatch(updateAccountSignedIn(false));
				window.alert("The username or password you entered is incorrect");
            }
        })
    }
}

function updateAccount (formData: AccountInfoType): IUpdateUserInfoAction {
    return {
        type: UPDATE_USER_INFO_ACTION,
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