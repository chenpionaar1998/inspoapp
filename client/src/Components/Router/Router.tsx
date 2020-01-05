// Libraries
import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// Components 
import SignUp from '../Account/Signup/SignUp';
import SignIn from '../Account/SignIn/SignIn';
import Dashboard from '../Dashboard/Dashboard';
import ConnectedPrivateRoute from './ConnectedPrivateRoute';
import ConnectedTopNavigationBar from '../TopNavigationBar/ConnectedTopNavigationBar';

type RouterProp = {
    history: any;
    signedIn: boolean;
}

const wrappedRoutes = () => (
    <div>
        <ConnectedTopNavigationBar/>
        <div className="container_wrap">
            <Route exact path="/dashboard_default">
                <Dashboard/>
            </Route>
        </div>
    </div>
)

export default class AppRouter extends React.PureComponent<RouterProp> {
    render() {
        return (
            <Router history={this.props.history}>
                <Switch>
                    <Route exact path="/">
                        {
                            this.props.signedIn ? 
                                <Redirect to="/dashboard_default"/> :
                                <SignIn history={this.props.history}/>
                        }
                    </Route>
                    <Route exact path="/signup">
                        {
                            this.props.signedIn ? 
                                <Redirect to="/dashboard_default"/> :
                                <SignUp history={this.props.history}/>
                        }
                    </Route>
                    <Route path="/signin">
                        {
                            this.props.signedIn ? 
                                <Redirect to="/dashboard_default"/> :
                                <SignIn history={this.props.history}/>
                        }
                    </Route>
                    <ConnectedPrivateRoute path="/" component={wrappedRoutes}/>
                </Switch>
            </Router>
        );
    }
}