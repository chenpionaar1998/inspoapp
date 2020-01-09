// Libraries
import { connect } from "react-redux";

// Actions

// Components
import Dashboard from './Dashboard';

// Types
import { AppState } from '../../RootReducer';

type ConnectedDashboardProps = {
}

const mapStateToProps = (state: AppState, ownProps: ConnectedDashboardProps) => ({
    
});

const ConnectedDashboard = connect(
    mapStateToProps,
    {
    
    }
)(Dashboard as any)

export default ConnectedDashboard;