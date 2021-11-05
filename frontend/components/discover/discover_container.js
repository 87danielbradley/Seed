import React from "react";
import { connect } from "react-redux";
import DiscoverView from "./discover_view";





const mSTP= (state = {}, ownProps) => ({
    currentUser: state.session.currentUser
})

const mDTP = (dispatch, ownProps) => ({
 
})

export default connect(mSTP)(DiscoverView);