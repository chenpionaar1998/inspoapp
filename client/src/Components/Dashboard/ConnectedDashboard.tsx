// Libraries
import { connect } from "react-redux";

// Actions
import { createPlan, fetchPlansFromDB, editPlan, deletePlan } from './duck/Actions'

// Components
import Dashboard from './Dashboard';

// Types
import { AppState } from '../../RootReducer';

const mapStateToProps = (state: AppState) => ({
    username: state.Account.userName,
    plans: state.Plans.plans
});

const ConnectedDashboard = connect(
    mapStateToProps,
    {
        createPlan: createPlan,
        editPlan: editPlan,
        deletePlan: deletePlan,
        fetchPlansFromDB: fetchPlansFromDB
    }
)(Dashboard as any)

export default ConnectedDashboard;