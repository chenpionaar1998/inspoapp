// Types
import { 
    DashboardState,
    DashboardAction,
    INSERT_PLAN_ACTION,
    FETCH_PLAN_ACTION, 
    EDIT_PLAN_ACTION,
    DELETE_PLAN_ACTION,
    UPDATE_FETCH_STATE_ACTION
} from './Types';
import { TravelPlanInfoType } from '../../UIKit/PlanModal/types';

const initialState: DashboardState = {
    loaded: false,
    plans: []
}

const Plans = ( state: DashboardState = initialState, action: DashboardAction): DashboardState => {
    let plansArr: TravelPlanInfoType[] = [];

    switch( action.type ) {
        case INSERT_PLAN_ACTION:
            plansArr.push(action.plan);
            plansArr = plansArr.concat(state.plans);
            
            return {
                loaded: state.loaded,
                plans: plansArr
            }

        case FETCH_PLAN_ACTION:

            return {
                loaded: state.loaded,
                plans: action.plans
            }

        case EDIT_PLAN_ACTION:
            state.plans.forEach(plan => {
                if (plan.planID !== action.plan.planID) {
                    plansArr.push(plan);
                }
                else {
                    plansArr.push(action.plan);
                }
            })

            return {
                loaded: state.loaded,
                plans: plansArr
            }

        case DELETE_PLAN_ACTION:
            state.plans.forEach(plan => {
                if (plan.planID !== action.planID) {
                    plansArr.push(plan);
                }
            })

            return {
                loaded: state.loaded,
                plans: plansArr
            }

        case UPDATE_FETCH_STATE_ACTION: 
            return {
                loaded: action.loaded,
                plans: state.plans
            }

        default:
            return state;
    }
}

export default Plans;