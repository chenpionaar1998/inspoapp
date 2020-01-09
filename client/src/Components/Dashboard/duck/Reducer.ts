// Types
import { DashboardState } from './Types';

const initialState: DashboardState = {
    plans: []
}

const Plans = ( state: DashboardState = initialState, action: any): DashboardState => {
    switch( action.type ) {
        default:
            return state;
    }
}

export default Plans;