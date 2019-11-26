
export const LOGIN_USER_ACTION = "@@USER/LOGIN_USER_ACTION";

export interface AccountState {
    userName: string;
    userID: string;
    fname: string;
    lname: string;
} 

interface LoginUserAction {
    type: typeof LOGIN_USER_ACTION,
    account: Account
}

export type AccountAction = LoginUserAction;