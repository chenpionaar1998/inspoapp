// Types
import { PlanPageState, PlanPageAction, CLEAR_CURRENT_PLAN_ACTION, UPDATE_CURRENT_PLAN_ACTION} from "./Types";

const initialState: PlanPageState = {
    planID: "",
    title: "",
    start: "",
    end: "",
    timeCreated: ""
}

const PlanPage = (state: PlanPageState = initialState, action: PlanPageAction) => {
    switch (action.type){
        case UPDATE_CURRENT_PLAN_ACTION:
            return {
                planID: action.plan.planID,
                title: action.plan.title,
                start: action.plan.start,
                end: action.plan.end,
                timeCreated: action.plan.timeCreated
            }
        case CLEAR_CURRENT_PLAN_ACTION:
            return {
                planID: "",
                title: "",
                start: "",
                end: "",
                timeCreated: ""
            }
        default:
            return state;
    }
}

export default PlanPage;