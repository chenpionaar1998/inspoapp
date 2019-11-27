// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import ConnectedSignUpForm from './ConnectedSignUpForm';

// Styles
import '../account.scss';

export default class SignUp extends React.PureComponent {
    render() {
        return (
            <div className="account">
                <div className="account_wrapper">
                <div className="account_card">
                    <ConnectedSignUpForm  />
                    <div className="account_have-account">
                        <span>Already have an account? <Link to="/signin">Login</Link></span>
                    </div>
                </div>
                </div>
            </div>
        )
    }
};
