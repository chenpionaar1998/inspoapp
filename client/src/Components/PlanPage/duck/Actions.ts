// Libraries
import { Dispatch } from "redux";

// Types
import { ClearPlanAction, IClearCurrentPlanAction, CLEAR_CURRENT_PLAN_ACTION, UpdateCurrentPlanAction, IUpdateCurrentPlanAction, UPDATE_CURRENT_PLAN_ACTION } from "./Types";
import { TravelPlanInfoType } from "../../UIKit/PlanModal/types";

export function getCurrentPlanInfo (planID: string): UpdateCurrentPlanAction {
        return (dispatch: Dispatch) => {
            fetch('/api/getPlanInfoWithID', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({planID: planID})
            })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    return dispatch(fetchCurrentPlan(result.plan));
                }
                else {
                    // add error state dispatch
                    console.log("Fetch plan info error");
                }
            });
        }
}

export function clearPlanPage (): ClearPlanAction {
    return (dispatch: Dispatch) => {
        return dispatch(clearPlan());
    }
}

function fetchCurrentPlan (plan: TravelPlanInfoType): IUpdateCurrentPlanAction {
    return {
        type: UPDATE_CURRENT_PLAN_ACTION,
        plan: plan
    }
}

function clearPlan (): IClearCurrentPlanAction {
    return {
        type: CLEAR_CURRENT_PLAN_ACTION
    }
}