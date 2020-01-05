// Libraries
import { connect } from "react-redux";

// Components
import PrivateRoute from "./PrivateRoute"

// Types
import { AppState } from '../../RootReducer'

type PrivateRouteProps = {
    path: string,
	component: any
}

const mapStateToProps = (state: AppState, ownProps: PrivateRouteProps) => ({
    signedIn: state.Account.signedIn,
    path: ownProps.path,
    component: ownProps.component
});

const ConnectedPrivateRoute = connect(
    mapStateToProps,
    null
)(PrivateRoute as any)

export default ConnectedPrivateRoute; 