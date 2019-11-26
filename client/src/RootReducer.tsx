// Libraries
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Reducers
import {AccountReducer} from './Components/Account/duck/Reducer';

const rootReducer = combineReducers({
    AccountReducer
});

export default function configureStore() {
    return createStore (
        rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    )
}