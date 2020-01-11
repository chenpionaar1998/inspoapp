// Libraries
import { Dispatch } from "redux";

// Types
import { TravelPlanInfoType, UserPlanLinkType } from "../../UIKit/types";
import {
    INSERT_PLAN_ACTION,
    IInsertPlanAction,
    InsertPlanAction
} from "./Types";

export function createPlan (formData: TravelPlanInfoType): InsertPlanAction {
    return (dispatch: Dispatch) => {
        fetch('/api/createPlan', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                return dispatch(insertPlan(formData));
            }
            else {
                // add error state dispatch
            }
        });
    }
}

export function linkUserToPlan (formData: UserPlanLinkType): void {
    fetch('/api/linkUserToPlan', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(result => {
        if (!result.success) {
            // add error state 
        }
    });
}

export function fetchPlans (): any {

}

function insertPlan (formData: TravelPlanInfoType): IInsertPlanAction {
    return {
        type: INSERT_PLAN_ACTION,
        plan: formData
    }
}
