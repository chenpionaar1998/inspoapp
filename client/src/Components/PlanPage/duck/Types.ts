// Libraries
import { Dispatch } from 'redux';

// Types
import { TravelPlanInfoType } from '../../UIKit/PlanModal/types';

export const UPDATE_CURRENT_PLAN_ACTION = "@@PLANPAGE/UPDATE_CURRENT_PLAN_ACTION";
export const CLEAR_CURRENT_PLAN_ACTION = "@@PLANPAGE/CLEAR_CURRENT_PLAN_ACTION";

export interface PlanPageState extends TravelPlanInfoType {
    planID: string;
    title: string;
    start: string;
    end: string;
    timeCreated: string;
}

export interface IUpdateCurrentPlanAction {
    type: typeof UPDATE_CURRENT_PLAN_ACTION;
    plan: TravelPlanInfoType
}

export interface IClearCurrentPlanAction {
    type: typeof CLEAR_CURRENT_PLAN_ACTION;
}

export type ClearPlanAction = (dispatch: Dispatch) => IClearCurrentPlanAction;
export type UpdateCurrentPlanAction = (dispatch: Dispatch) => Promise<IUpdateCurrentPlanAction | void> | void;

export type PlanPageAction = IUpdateCurrentPlanAction | IClearCurrentPlanAction;