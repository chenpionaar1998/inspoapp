// Libraries
import { Dispatch } from "redux";

export const UPDATE_USER_INFO_ACTION = "@@USER/UPDATE_USER_INFO_ACTION";
export const UPDATE_ACCOUNT_SIGNED_IN_ACTION = "@@USER/UPDATE_ACCOUNT_SIGNED_IN_ACTION"

export interface AccountState {
    userName: string;
    fname: string;
    lname: string;
    signedIn: boolean;
} 

export interface IUpdateUserInfoAction {
    type: typeof UPDATE_USER_INFO_ACTION,
    userName: string;
    fname: string;
    lname: string;
}

export interface IUpdateAccountSignedInAction {
    type: typeof UPDATE_ACCOUNT_SIGNED_IN_ACTION,
    signedIn: boolean,
}

export type UpdateUserInfoAction = (dispatch: Dispatch) => Promise<IUpdateUserInfoAction | void> | void;

// export type UpdateAccountSignedInAction = (dispatch: Dispatch) => Promise<IUpdateAccountSignedInAction> | void;

export type AccountAction = IUpdateUserInfoAction | IUpdateAccountSignedInAction;