// Types
import { 
    DashboardState,
    DashboardAction,
    INSERT_PLAN_ACTION,
    FETCH_PLAN_ACTION 
} from './Types';

const initialState: DashboardState = {
    plans: []
}

const Plans = ( state: DashboardState = initialState, action: DashboardAction): DashboardState => {
    switch( action.type ) {
        case INSERT_PLAN_ACTION:
            return {
                plans: [...state.plans, action.plan]
            }
        case FETCH_PLAN_ACTION:
            return {
                plans: action.plans
            }
        default:
            return state;
    }
}

export default Plans;