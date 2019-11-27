// Libraries
import { connect } from "react-redux";

// Actions
import { createUser } from '../duck/Actions';
import SignUpForm from "./SignUpForm";

// Types
import { AppState } from '../../../RootReducer'

const mapStateToProps = (state: AppState) => {

}

const ConnectedSignUpForm = connect(
    mapStateToProps,
    {
        createUser: createUser
    }
)(SignUpForm as any)

export default ConnectedSignUpForm;