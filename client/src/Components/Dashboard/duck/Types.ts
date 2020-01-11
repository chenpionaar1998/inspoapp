// Libraries
import { Dispatch } from 'redux';

// Types
import { TravelPlanInfoType } from '../../UIKit/types';

export const INSERT_PLAN_ACTION = "@@DASHBOARD/INSERT_PLAN_ACTION";

export interface DashboardState {
    plans: TravelPlanInfoType[];
}

export interface IInsertPlanAction {
    type: typeof INSERT_PLAN_ACTION,
    plan: TravelPlanInfoType
}

export type InsertPlanAction = (dispatch: Dispatch) => Promise<IInsertPlanAction | void> | void;

export type DashboardAction = IInsertPlanAction;