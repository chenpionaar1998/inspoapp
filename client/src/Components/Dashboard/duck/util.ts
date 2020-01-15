// Libraries
import moment from 'moment';

import { TravelPlanInfoType } from "../../UIKit/PlanModal/types"

export const sortTravelPlans = (plans: TravelPlanInfoType[]): TravelPlanInfoType[] => {
    return plans.sort(
        (planA: TravelPlanInfoType, planB: TravelPlanInfoType): number => {
            const time1 = moment(planA.timeCreated);
            const time2 = moment(planB.timeCreated);

            if (time1.isBefore(time2)){
                return 1;
            }

            return -1;
        }
    )
} 