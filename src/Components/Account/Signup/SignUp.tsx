// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import SignUpForm from './SignUpForm';

// Styles
import '../account.scss';

export default class SignUp extends React.PureComponent {
    render() {
        return (
            <div className="account">
                <div className="account_wrapper">
                <div className="account_card">
                    <SignUpForm  />
                    <div className="account_have-account">
                    <span>Already have an account? <Link to="/login">Login</Link></span>
                    </div>
                </div>
                </div>
            </div>
        )
    }
};
