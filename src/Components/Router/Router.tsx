// Libraries
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components 
import SignUp from '../Account/Signup/SignUp';
import SignIn from '../Account/SignIn/SignIn';

export default class AppRouter extends React.PureComponent {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" compoonent={SignIn}/>
                    <Route exact path="/signup" component={SignUp} />
                    <Route path="/signin" component={SignIn} />
                </Switch>
            </Router>
        );
    }

}