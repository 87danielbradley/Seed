import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import CategoryBar from "./category_bar_view";

const mSTP= (state = {}, ownProps) => ({
    currentUser: state.session.currentUser
})

const mDTP = (dispatch, ownProps) => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP,mDTP)(CategoryBar);