// Types
import { AccountState,
        AccountAction, 
        UPDATE_ACCOUNT_SIGNED_IN_ACTION,
        UPDATE_USER_INFO_ACTION
} from './Types';

const initialState: AccountState  = {
    userName: '',
    fname: '',
    lname: '',
    signedIn: false,
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