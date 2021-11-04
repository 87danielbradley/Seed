import React from "react";
import { connect } from "react-redux";
import NavBar from './nav_bar';
import { logout } from "../../actions/session_actions";

const mSTP= (state = {}, ownProps) => ({
    currentUser: state.session.currentUser
})

const mDTP = (dispatch, ownProps) => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP,mDTP)(NavBar);