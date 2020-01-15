// DB
import pool from '../database';

// Type
import { TravelPlanInfoType } from '../../../client/src/Components/UIKit/PlanModal/types';

type fetchPlansForUserReqType = {
    email: string;
}

type fetchPlansForUserResType = {
    planIDs: string[];
}

type getPlansInfoWithIDReqType = {
    planIDs: string[];
}

type getPlansInfoWithIDResType = {
    plans: TravelPlanInfoType[]
}

export async function fetchPlansForUser(reqObj: fetchPlansForUserReqType): Promise<fetchPlansForUserResType> {
    const result = await pool.query('SELECT planid FROM authors WHERE email = ($1);', 
    [reqObj.email]);

    const response: fetchPlansForUserResType = {planIDs: result.rows.map(result => result.planid)};

    return response;
}

export async function getPlansInfoWithID(reqObj: getPlansInfoWithIDReqType): Promise<getPlansInfoWithIDResType> {
    let response: getPlansInfoWithIDResType = {plans: []};
    
    for (const planID of reqObj.planIDs){
        const res = await pool.query("SELECT * FROM travelPlans WHERE planID = ($1);", [planID]);

        response.plans.push({
            planID: res.rows[0].planid,
            title: res.rows[0].title,
            start: res.rows[0].planstartdate,
            end: res.rows[0].planenddate,
            timeCreated: res.rows[0].timecreated
        });
    };

    return response;
}