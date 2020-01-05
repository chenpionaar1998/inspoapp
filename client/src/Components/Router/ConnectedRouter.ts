// Libraries
import { connect } from "react-redux";

// Components
import Router from "./Router"

// Types
import { AppState } from '../../RootReducer'

type RouterProps = {
    history: any
}

const mapStateToProps = (state: AppState, ownProps: RouterProps) => ({
    signedIn: state.Account.signedIn,
    history: ownProps.history
});

const ConnectedRouter = connect(
    mapStateToProps,
    null
)(Router as any)

export default ConnectedRouter; 