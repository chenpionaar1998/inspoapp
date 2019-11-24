// Libraries
import React from 'react';

// Components
import SignInForm from './SignInForm';

export default class SignIn extends React.PureComponent {
    render() {
        return (
            <div className="account">
                <div className="account_wrapper">
                <div className="account_card">
                    <SignInForm />
                </div>
                </div>
            </div>
        )
    }
}