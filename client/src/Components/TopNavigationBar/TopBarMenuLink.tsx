// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

type TopBarMenuLinkProps = {
    path: string;
    icon: string;
    title: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export default class TopBarMenuLink extends React.PureComponent<TopBarMenuLinkProps> {
    render() {
        return (
            <Link className="topbar_link" to={this.props.path} onClick={this.props.onClick}>
                <span className={`topbar_link-icon lnr lnr-${this.props.icon}`} />
                <p className="topbar_link-title">{this.props.title}</p>
            </Link>
        )
    }
}