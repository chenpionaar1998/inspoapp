// Libraries
import { Dispatch } from "redux";

// Types
import { TravelPlanInfoType, UserPlanLinkType } from "../../UIKit/PlanModal/types";
import {
    INSERT_PLAN_ACTION,
    IInsertPlanAction,
    InsertPlanAction,
    FetchPlanAction,
    IFetchPlanAction,
    FETCH_PLAN_ACTION,
    EDIT_PLAN_ACTION,
    IEditPlanAction,
    EditPlanAction
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

export function fetchPlansFromDB (username: string): FetchPlanAction {
    return (dispatch: Dispatch) => {
        fetch('/api/fetchPlansForUser', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: username})
        })
        .then(response => response.json())
        .then(res => {
            if (res.success) {
                // if the query was successful we use the ids we got to query the details of the plans
                fetch('/api/getPlansInfoWithID', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(res.planIDs)
                })
                .then(response => response.json())
                .then(res => {
                    if (res.success) {
                        return dispatch(fetchPlans(res.plans));
                    }
                });
            }
        });
    }
}

export function editPlan (formData: TravelPlanInfoType): EditPlanAction {
    return (dispatch: Dispatch) => {
        fetch('/api/editPlan', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(res => {
            if (res.success) {
                return dispatch(modifyPlan(formData));
            }
        });
    }
}

export function deletePlan (planID: string): any {}

function insertPlan (formData: TravelPlanInfoType): IInsertPlanAction {
    return {
        type: INSERT_PLAN_ACTION,
        plan: formData
    }
}

function fetchPlans (plans: TravelPlanInfoType[]): IFetchPlanAction {
    return {
        type: FETCH_PLAN_ACTION,
        plans: plans
    }
}

function modifyPlan (formData: TravelPlanInfoType): IEditPlanAction {
    return {
        type: EDIT_PLAN_ACTION,
        plan: formData
    }
}
