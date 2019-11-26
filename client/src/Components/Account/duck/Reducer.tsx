// Types
import {AccountState, AccountAction} from './Types';

const initialState: AccountState  = {
    userName: '',
    userID: '',
    fname: '',
    lname: ''
}

export function AccountReducer(
    state: AccountState = initialState,
    action: AccountAction): AccountState {
    switch (action.type){
        // TODO: ADD MORE STATE
        default: 
        return state;
    }
}