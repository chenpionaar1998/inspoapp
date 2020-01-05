// Libraries
import { connect } from "react-redux";

// Actions
import { signIn } from '../duck/Actions';

// Componenets
import SignInForm from "./SignInForm";

// Types
import { AppState } from '../../../RootReducer'

type ConnectedSignInProps = {
    history: any;
}

const mapStateToProps = (state: AppState, ownProps: ConnectedSignInProps) => ({
    signedIn: state.Account.signedIn,
    history: ownProps.history
});

const ConnectedSignInForm = connect(
    mapStateToProps,
    {
        signIn: signIn
    }
)(SignInForm as any)

export default ConnectedSignInForm; 