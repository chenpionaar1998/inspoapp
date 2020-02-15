// Libraries
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Types
import { AccountState } from './Components/Account/duck/Types';
import { DashboardState } from './Components/Dashboard/duck/Types';
import { PlanPageState } from './Components/PlanPage/duck/Types';

// Reducers
import Account from './Components/Account/duck/Reducer';
import Plans from './Components/Dashboard/duck/Reducer';
import PlanPage from './Components/PlanPage/duck/Reducer';

const rootReducer = combineReducers({
    Account,
    Plans,
    PlanPage
});

export type AppState = {
    Account: AccountState;
    Plans: DashboardState;
    PlanPage: PlanPageState
}

export default function configureStore() {
    return createStore (
        rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    )
}