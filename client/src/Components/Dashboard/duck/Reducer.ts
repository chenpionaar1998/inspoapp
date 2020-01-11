// Types
import { DashboardState, DashboardAction, INSERT_PLAN_ACTION } from './Types';

const initialState: DashboardState = {
    plans: []
}

const Plans = ( state: DashboardState = initialState, action: DashboardAction): DashboardState => {
    switch( action.type ) {
        case INSERT_PLAN_ACTION:
            return {
                plans: [...state.plans, action.plan]
            }
        default:
            return state;
    }
}

export default Plans;