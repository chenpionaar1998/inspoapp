// Libraries
import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// Components 
import SignUp from '../Account/Signup/SignUp';
import SignIn from '../Account/SignIn/SignIn';
import ConnectedDashboard from '../Dashboard/ConnectedDashboard';
import ConnectedPrivateRoute from './ConnectedPrivateRoute';
import ConnectedTopNavigationBar from '../TopNavigationBar/ConnectedTopNavigationBar';
import ConnectedPlanPage from '../PlanPage/ConnectedPlanPage';

type RouterProp = {
    history: any;
    signedIn: boolean;
}

const wrappedRoutes = () => (
    <>
        <ConnectedTopNavigationBar/>
        <div className="container_wrap">
            <Route exact path="/dashboard">
                <ConnectedDashboard/>
            </Route>
            <Route exact path="/plan/:planID">
                <ConnectedPlanPage/>
            </Route>
        </div>
    </>
)

export default class AppRouter extends React.PureComponent<RouterProp> {
    render() {
        return (
            <Router history={this.props.history}>
                <Switch>
                    <Route exact path="/">
                        {
                            this.props.signedIn ? 
                                <Redirect to="/dashboard"/> :
                                <SignIn history={this.props.history}/>
                        }
                    </Route>
                    <Route exact path="/signup">
                        {
                            this.props.signedIn ? 
                                <Redirect to="/dashboard"/> :
                                <SignUp history={this.props.history}/>
                        }
                    </Route>
                    <Route path="/signin">
                        {
                            this.props.signedIn ? 
                                <Redirect to="/dashboard"/> :
                                <SignIn history={this.props.history}/>
                        }
                    </Route>
                    <ConnectedPrivateRoute path="/" component={wrappedRoutes}/>
                </Switch>
            </Router>
        );
    }
}