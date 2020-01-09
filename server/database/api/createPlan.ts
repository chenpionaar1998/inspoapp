// DB
import pool from '../database';

// Types
import { PlanInfoType, planLinkFormType } from '../../../client/src/Components/UIKit/types';

export async function createPlan(formData: PlanInfoType): Promise<boolean> {
    const result = await pool.query("INSERT INTO travelPlans VALUES ($1, $2, $3, $4);",
    [formData.planID, formData.title, formData.start, formData.end])
    .catch(err => {
        console.log("Create Plan Error: ", err);
        return false;
    });
    if (result) {
        return true;
    }
}

export async function linkUserToPlan(formData: planLinkFormType): Promise<boolean> {
    const result = await pool.query("INSERT INTO authors VALUES ($1, $2);",
    [formData.email, formData.planID])
    .catch(err => {
        console.log("Link User Error: ", err);
        return false;
    });
    if (result) {
        return true;
    }
}