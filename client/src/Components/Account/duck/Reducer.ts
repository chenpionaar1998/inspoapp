// Types
import { AccountState,
        AccountAction, 
        UPDATE_ACCOUNT_SIGNED_IN_ACTION,
        UPDATE_USER_INFO_ACTION
} from './Types';

// Utils
import {isTrue} from "../../../utils/strings"

const initialState: AccountState  = {
    userName: localStorage.username,
    fname: localStorage.fname,
    lname: localStorage.lname,
    signedIn: isTrue(localStorage.signedIn)
}

const  Account = ( state: AccountState = initialState, action: AccountAction): AccountState => {
    switch (action.type){
        case UPDATE_USER_INFO_ACTION:
            return {
                userName: action.userName,
                fname: action.fname,
                lname: action.lname,
                signedIn: state.signedIn,
            }
        case UPDATE_ACCOUNT_SIGNED_IN_ACTION:
            return {
                userName: state.userName,
                fname: state.fname,
                lname: state.lname,
                signedIn: action.signedIn,
            }
        default: 
        return state;
    }
}

export default Account;