// Libraries
import { connect } from "react-redux";

// Actions
import { signUp } from '../duck/Actions';
import SignUpForm from "./SignUpForm";

// Types
import { AppState } from '../../../RootReducer'

type ConnectedSignInProps = {
    history: any;
}

const mapStateToProps = (state: AppState, ownProps: ConnectedSignInProps) => ({
    signedIn: state.Account.signedIn,
    history: ownProps.history
});

const ConnectedSignUpForm = connect(
    mapStateToProps,
    {
        signUp: signUp
    }
)(SignUpForm as any)

export default ConnectedSignUpForm;