// Types
import {AccountState, AccountAction, SIGN_UP_USER_ACTION} from './Types';

const initialState: AccountState  = {
    userName: '',
    fname: '',
    lname: ''
}

const  Account = ( state: AccountState = initialState, action: AccountAction): AccountState => {
    switch (action.type){
        // TODO: ADD MORE STATE
        case SIGN_UP_USER_ACTION:
            return {
                userName: action.account.userName,
                fname: action.account.fname,
                lname: action.account.lname
            }
        default: 
        return state;
    }
}

export default Account;