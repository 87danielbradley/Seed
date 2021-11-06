import React from "react";
import { connect } from "react-redux";
import DiscoverItem from "./discover_item";
import DiscoverView from "./discover_view";





const mSTP= (state = {}, ownProps) => {
    debugger
    return({currentUser: state.session.currentUser})
}
const mDTP = (dispatch, ownProps) => ({
 
})

export default connect(mSTP)(DiscoverView);