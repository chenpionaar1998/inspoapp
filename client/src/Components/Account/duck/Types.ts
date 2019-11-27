import { SignUpFormType } from "../Signup/SignUpForm";
import { Dispatch } from "redux";

export const LOGIN_USER_ACTION = "@@USER/LOGIN_USER_ACTION";
export const SIGN_UP_USER_ACTION = "@@USER/SIGN_UP_USER_ACTION";

export interface AccountState {
    userName: string;
    fname: string;
    lname: string;
} 

export interface ILoginUserAction {
    type: typeof LOGIN_USER_ACTION,
    account: AccountState
}

export interface ISignUpUserAction {
    type: typeof SIGN_UP_USER_ACTION,
    account: AccountState
}

export type SignUpUserAction = (dispatch: Dispatch) => Promise<ISignUpUserAction> | void;

export type AccountAction = ILoginUserAction | ISignUpUserAction;