// Libraries
import { Dispatch } from 'redux';

// Types
import { TravelPlanInfoType } from '../../UIKit/PlanModal/types';

export const INSERT_PLAN_ACTION = "@@DASHBOARD/INSERT_PLAN_ACTION";
export const FETCH_PLAN_ACTION = "@@DASHBOARD/FETCH_PLAN_ACTION";
export const EDIT_PLAN_ACTION = "@@DASHBOARD/EDIT_PLAN_ACTION";
export const DELETE_PLAN_ACTION = "@@DASHBOARD/DELETE_PLAN_ACTION";
export const UPDATE_FETCH_STATE_ACTION = "@@DASHBOARD/UPDATE_FETCH_STATE_ACTION";

export interface DashboardState {
    loaded: boolean;
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

export interface IEditPlanAction {
    type: typeof EDIT_PLAN_ACTION,
    plan: TravelPlanInfoType
}

export interface IDeletePlanAction {
    type: typeof DELETE_PLAN_ACTION,
    planID: string
}

export interface IUpdateFetchStateAction {
    type: typeof UPDATE_FETCH_STATE_ACTION,
    loaded: boolean
}

export type InsertPlanAction = (dispatch: Dispatch) => Promise<IInsertPlanAction | void> | void;
export type FetchPlanAction = (dispatch: Dispatch) => Promise<IFetchPlanAction | void | unknown> | void;
export type EditPlanAction = (dispatch: Dispatch) => Promise<IEditPlanAction | void> | void;
export type DeletePlanAction = (dispatch: Dispatch) => Promise<IDeletePlanAction | void> | void;
export type UpdateFetchStateAction = (dispatch: Dispatch) => Promise<IUpdateFetchStateAction | void> | void;

export type DashboardAction = IInsertPlanAction | IFetchPlanAction | IEditPlanAction | IDeletePlanAction | IUpdateFetchStateAction;