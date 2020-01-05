// Libraries
import { connect } from "react-redux";

// Components
import TopNavigationBar from "./TopNavigationBar"

// Types
import { AppState } from '../../RootReducer'

// Actions
import {signOut} from '../Account/duck/Actions';

const mapStateToProps = (state: AppState) => ({
    fname: state.Account.fname,
    lname: state.Account.lname
});

const ConnectedTopNavigationBar = connect(
    mapStateToProps,
    {
        signOut: signOut
    }
)(TopNavigationBar as any)

export default ConnectedTopNavigationBar; 