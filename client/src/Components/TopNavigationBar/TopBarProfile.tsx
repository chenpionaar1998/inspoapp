// Libraries
import React from 'react';
import { Collapse } from 'reactstrap';

// Icons
import DownIcon from 'mdi-react/ChevronDownIcon';

// Types 
import { UpdateUserInfoAction } from '../Account/duck/Types';

// Components
import TopBarMenuLink from './TopBarMenuLink';

// Utils
import {capitalize} from '../../utils/strings';

type TopBarProfileProps = {
  fname: string;
  lname: string;
  signOut: () => UpdateUserInfoAction;
}

type TopBarProfileState = {
  collapsed: boolean;
}

export default class TopBarProfile extends React.PureComponent<TopBarProfileProps, TopBarProfileState> {
  state = {
    collapsed: false
  }

  // Ava = `${process.env.PUBLIC_URL}/Shared/img/ava.png`;
  Ava = "avatar.png"

  toggle = () => {
    this.setState(prevState => ({collapsed: !prevState.collapsed}));
  }

  render() {
    return (
      <div className="topbar_profile">
        <button className="topbar_avatar" type="button" onClick={this.toggle} style={{backgroundColor: this.state.collapsed ? "#eeebeb" : ""}}>
          <img className="topbar_avatar-img" src={this.Ava} alt="avatar" />
          <p className="topbar_avatar-name">{capitalize(this.props.fname) + " " + capitalize(this.props.lname)}</p>
          <DownIcon className="topbar_icon" />
        </button>
        
        {this.state.collapsed && <button className="topbar_back" type="button" onClick={this.toggle} />}
        
        <Collapse isOpen={this.state.collapsed} className="topbar_menu-wrap">
          <div className="topbar_menu">
            <TopBarMenuLink title="Home" icon="home" path="/" />
            <TopBarMenuLink title="My Profile" icon="user" path="/" />
            <TopBarMenuLink title="Sign Out" icon="exit" path="/" onClick={this.props.signOut}/>
          </div>
        </Collapse>
      </div>
    )
  }
}