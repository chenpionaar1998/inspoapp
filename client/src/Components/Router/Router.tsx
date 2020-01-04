// Libraries
import React from "react";
import { Router, Route, Switch } from "react-router-dom";

// Components 
import SignUp from '../Account/Signup/SignUp';
import SignIn from '../Account/SignIn/SignIn';
import Dashboard from '../Dashboard/Dashboard';

type RouterProp = {
    history: any;
}

export default class AppRouter extends React.PureComponent<RouterProp> {
    render() {
        return (
            <Router history={this.props.history}>
                <Switch>
                    <Route exact path="/">
                        <SignIn history={this.props.history}/>
                    </Route>
                    <Route exact path="/signup">
                        <SignUp history={this.props.history}/>
                    </Route>
                    <Route path="/signin">
                        <SignIn history={this.props.history}/>
                    </Route>
                    <Route exact path="/dashboard_default">
                        <Dashboard/>
                    </Route>
                </Switch>
            </Router>
        );
    }

}