// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import TopBarProfile from './TopBarProfile';

// Types 
import { UpdateUserInfoAction } from '../Account/duck/Types';

type TopNavigationBarProps = {
    fname: string;
    lname: string;
    signOut: () => UpdateUserInfoAction;
}

export default class TopNavigationBar extends React.PureComponent<TopNavigationBarProps> {
    render() {
        return (
            <div className={"layout layout--top-navigation"}>
                <div className="topbar topbar--navigation">
                    <div className="topbar_wrapper">
                    <div className="topbar_left">
                        <Link className="topbar_logo" to="/dashboard/"/>
                    </div>
                    <div className="topbar_right">
                        <TopBarProfile fname={this.props.fname} lname={this.props.lname} signOut={this.props.signOut}/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}