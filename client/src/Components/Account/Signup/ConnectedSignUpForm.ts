// Libraries
import { connect } from "react-redux";

// Actions
import { createUser } from '../duck/Actions';
import SignUpForm from "./SignUpForm";

const ConnectedSignUpForm = connect(
    null,
    {
        createUser: createUser
    }
)(SignUpForm as any)

export default ConnectedSignUpForm;