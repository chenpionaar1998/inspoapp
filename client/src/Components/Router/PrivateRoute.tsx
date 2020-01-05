// Libraries
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

type PrivateRouteProps = {
    signedIn: boolean,
    path: string,
	component: any
}

export default class PrivateRoute extends React.PureComponent<PrivateRouteProps> {
    render() {
        return (
            this.props.signedIn ? (
                <Route path={this.props.path} render={props => 
                    <this.props.component {...props}/>
                }/>
            ): <Redirect to="/"/>
        );
    }
}
