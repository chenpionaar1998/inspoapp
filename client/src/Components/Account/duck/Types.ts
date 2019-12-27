// Libraries
import { Dispatch } from "redux";

export const SIGN_IN_USER_ACTION = "@@USER/SIGN_IN_USER_ACTION";
export const SIGN_UP_USER_ACTION = "@@USER/SIGN_UP_USER_ACTION";
export const UPDATE_ACCOUNT_SIGNED_IN_ACTION = "@@USER/UPDATE_ACCOUNT_SIGNED_IN_ACTION"

export interface AccountState {
    userName: string;
    fname: string;
    lname: string;
    signedIn: boolean;
} 

export interface ISignInUserAction {
    type: typeof SIGN_IN_USER_ACTION,
    userName: string;
    fname: string;
    lname: string;
}

export interface ISignUpUserAction {
    type: typeof SIGN_UP_USER_ACTION,
    userName: string;
    fname: string;
    lname: string;
}

export interface IUpdateAccountSignedInAction {
    type: typeof UPDATE_ACCOUNT_SIGNED_IN_ACTION,
    signedIn: boolean
}

export type SignInUserAction = (dispatch: Dispatch) => Promise<ISignInUserAction | void> | void;

export type SignUpUserAction = (dispatch: Dispatch) => Promise<ISignUpUserAction | void> | void;

// export type UpdateAccountSignedInAction = (dispatch: Dispatch) => Promise<IUpdateAccountSignedInAction> | void;

export type AccountAction = ISignInUserAction | ISignUpUserAction | IUpdateAccountSignedInAction;