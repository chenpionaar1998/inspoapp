// Libraries
import React from 'react';

// Components
import ConnectedSignInForm from './ConnectedSignInForm';

export default class SignIn extends React.PureComponent {
    render() {
        return (
            <div className="account">
                <div className="account_wrapper">
                    <div className="account_card">
                        <ConnectedSignInForm />
                    </div>
                </div>
            </div>
        )
    }
}