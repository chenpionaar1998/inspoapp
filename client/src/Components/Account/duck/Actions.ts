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

export function signUp (formData: AccountInfoType): UpdateUserInfoAction {
    return (dispatch: Dispatch) => {
        fetch('/api/signUp', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          })
          .then(response => response.json())
          .then(result => {
            if (result.correctUser) {
                localStorage.setItem("signedIn", JSON.stringify(true));
                localStorage.setItem("username", formData.email);
                localStorage.setItem("fname", formData.fname);
                localStorage.setItem("lname", formData.lname);

                return batch(() => {
                    dispatch(updateAccount(result.user));
                    dispatch(updateAccountSignedIn(true));
                });                 
            }
            else {
                localStorage.setItem("signedIn", JSON.stringify(false));
                dispatch(updateAccountSignedIn(false));
                window.alert("The username is already taken");
            }
          });
    }
}

export function signIn (formData: SignInFormType): UpdateUserInfoAction {
    return (dispatch: Dispatch) => {
        fetch('/api/signIn', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(result => {
            if (result.correctUser) {
                localStorage.setItem("signedIn", JSON.stringify(true));
                localStorage.setItem("username", result.user.email);
                localStorage.setItem("fname", result.user.fname);
                localStorage.setItem("lname", result.user.lname);
                return batch(() => {
                    dispatch(updateAccount(result.user));
                    dispatch(updateAccountSignedIn(true));
                });
            }
            else {
                localStorage.setItem("signedIn", JSON.stringify(false));
                dispatch(updateAccountSignedIn(false));
				window.alert("The username or password you entered is incorrect");
            }
        })
    }
}

export function signOut(): UpdateUserInfoAction {
    localStorage.clear();

    const emptyForm: AccountInfoType = {
        email: "",
        password: "",
        fname:"",
        lname: ""
    }

    return (dispatch: Dispatch) => {
        return batch(() => {
            dispatch(updateAccount(emptyForm));
            dispatch(updateAccountSignedIn(false));
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