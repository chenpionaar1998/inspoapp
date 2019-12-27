// Types
import { AccountState,
        AccountAction, 
        SIGN_UP_USER_ACTION, 
        SIGN_IN_USER_ACTION, 
        UPDATE_ACCOUNT_SIGNED_IN_ACTION
} from './Types';

const initialState: AccountState  = {
    userName: '',
    fname: '',
    lname: '',
    signedIn: false
}

const  Account = ( state: AccountState = initialState, action: AccountAction): AccountState => {
    switch (action.type){
        case SIGN_IN_USER_ACTION:
        case SIGN_UP_USER_ACTION:
            return {
                userName: action.userName,
                fname: action.fname,
                lname: action.lname,
                signedIn: state.signedIn
            }
        case UPDATE_ACCOUNT_SIGNED_IN_ACTION:
            return {
                userName: state.userName,
                fname: state.fname,
                lname: state.lname,
                signedIn: action.signedIn
            }
        default: 
        return state;
    }
}

export default Account;