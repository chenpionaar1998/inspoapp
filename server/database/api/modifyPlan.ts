// DB
import pool from '../database';

// Types
import { TravelPlanInfoType } from '../../../client/src/Components/UIKit/PlanModal/types';

export async function editPlan(formData: TravelPlanInfoType): Promise<boolean> {
    const result = await pool.query("UPDATE travelPlans SET title=$1,planStartDate=$2,planEndDate=$3 WHERE planID=$4;",
    [formData.title, formData.start, formData.end, formData.planID])
    .catch(err => {
        console.log("Edit Plan Error: ", err);
        return false;
    });
    if (result) {
        return true;
    }

    return false;
}