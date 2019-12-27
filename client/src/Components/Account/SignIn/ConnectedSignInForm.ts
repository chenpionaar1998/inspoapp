// Libraries
import { connect } from "react-redux";

// Actions
import { signInUser } from '../duck/Actions';
import SignInForm from "./SignInForm";

// Types
import { AppState } from '../../../RootReducer'

const mapStateToProps = (state: AppState) => {
    return {
        userName: state.Account.userName
    }
}

const ConnectedSignInForm = connect(
    mapStateToProps ,
    {
        signInUser: signInUser
    }
)(SignInForm as any)

export default ConnectedSignInForm; 