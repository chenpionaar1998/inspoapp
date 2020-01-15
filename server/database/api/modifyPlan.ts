// DB
import pool from '../database';

// Types
import { TravelPlanInfoType, UserPlanLinkType } from '../../../client/src/Components/UIKit/PlanModal/types';

export async function editPlan(formData: TravelPlanInfoType): Promise<boolean> {
    const result = await pool.query("UPDATE travelPlans SET title=$1,planStartDate=$2,planEndDate=$3, timeCreated=$4, WHERE planID=$5;",
    [formData.title, formData.start, formData.end, formData.timeCreated, formData.planID])
    .catch(err => {
        console.log("Edit Plan Error: ", err);
        return false;
    });
    if (result) {
        return true;
    }

    return false;
}

export async function deletePlan(userLink: UserPlanLinkType): Promise<boolean> {
    const result = await pool.query("DELETE FROM authors WHERE email=$1 AND planID=$2;",
    [userLink.email, userLink.planID])
    .catch(err => {
        console.log("Delete Plan Error: ", err);
        return false;
    });

    if (result) {
        const checkPlan = await pool.query("SELECT EXISTS(SELECT * FROM authors WHERE planID=$1);", [userLink.planID]);
        if (checkPlan.rows[0].exists) {
            console.log('plan deleted but still have authors remaining');
            return true;
        }
        else
        {
            const deleteForAll = await pool.query("DELETE FROM travelPlans WHERE planID=$1",
            [userLink.planID])
            .catch(err => {
                console.log("Delete plan for all user error: ", err);
                return false;
            })
            if (deleteForAll) {
                return true;
            }

            return false;
        }
    }

    return false;
}