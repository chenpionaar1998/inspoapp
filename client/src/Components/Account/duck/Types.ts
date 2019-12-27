// Libraries
import { Dispatch } from "redux";

export const SIGN_IN_USER_ACTION = "@@USER/SIGN_IN_USER_ACTION";
export const SIGN_UP_USER_ACTION = "@@USER/SIGN_UP_USER_ACTION";

export interface AccountState {
    userName: string;
    fname: string;
    lname: string;
} 

export interface ISignInUserAction {
    type: typeof SIGN_IN_USER_ACTION,
    account: AccountState
}

export interface ISignUpUserAction {
    type: typeof SIGN_UP_USER_ACTION,
    account: AccountState
}

export type SignInUserAction = (dispatch: Dispatch) => Promise<ISignInUserAction> | void;

export type SignUpUserAction = (dispatch: Dispatch) => Promise<ISignUpUserAction> | void;

export type AccountAction = ISignInUserAction | ISignUpUserAction;