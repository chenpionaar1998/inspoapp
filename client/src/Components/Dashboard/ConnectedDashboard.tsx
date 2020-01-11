// Libraries
import { connect } from "react-redux";

// Actions
import { createPlan } from './duck/Actions'

// Components
import Dashboard from './Dashboard';

// Types
import { AppState } from '../../RootReducer';

const mapStateToProps = (state: AppState) => ({
    username: state.Account.userName
});

const ConnectedDashboard = connect(
    mapStateToProps,
    {
        createPlan: createPlan,
    }
)(Dashboard as any)

export default ConnectedDashboard;