// Libraries
import uuid from 'uuid';

export type CreatePlanFormType = {
    planID: typeof uuid;
    title: string;
    start: string;
    end: string;
}

export type planLinkFormType = {
    email: string;
    planID: typeof uuid;
}