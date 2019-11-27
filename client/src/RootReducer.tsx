// Libraries
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Types
import { AccountState } from '../src/Components/Account/duck/Types';

// Reducers
import Account from './Components/Account/duck/Reducer';

const rootReducer = combineReducers({
    Account
});

export type AppState = {
    Account: AccountState
}

export default function configureStore() {
    return createStore (
        rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    )
}