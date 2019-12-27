// Libraries
import React from 'react';

// Components
import ConnectedSignInForm from './ConnectedSignInForm';

type SigninProps = {
    history: any;
}

export default class SignIn extends React.PureComponent<SigninProps> {
    render() {
        return (
            <div className="account">
                <div className="account_wrapper">
                    <div className="account_card">
                        <ConnectedSignInForm history={this.props.history}/>
                    </div>
                </div>
            </div>
        )
    }
}