// Libraries
import { Dispatch } from 'redux';

// Types
import { TravelPlanInfoType } from '../../UIKit/types';

export const INSERT_PLAN_ACTION = "@@DASHBOARD/INSERT_PLAN_ACTION";
export const FETCH_PLAN_ACTION = "@@DASHBOARD/FETCH_PLAN_ACTION";

export interface DashboardState {
    plans: TravelPlanInfoType[];
}

export interface IInsertPlanAction {
    type: typeof INSERT_PLAN_ACTION,
    plan: TravelPlanInfoType
}

export interface IFetchPlanAction {
    type: typeof FETCH_PLAN_ACTION,
    plans: TravelPlanInfoType[]
}

export type InsertPlanAction = (dispatch: Dispatch) => Promise<IInsertPlanAction | void> | void;
export type FetchPlanAction = (dispatch: Dispatch) => Promise<IFetchPlanAction | void | unknown> | void;

export type DashboardAction = IInsertPlanAction | IFetchPlanAction;