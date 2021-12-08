import React from "react";
import { connect } from "react-redux";
import NavBar from './nav_bar';
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";


const mSTP= (state = {}, ownProps) => ({
    currentUser: state.session.currentUser
})

const mDTP = (dispatch, ownProps) => ({
    // logout: () => dispatch(logout())
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mSTP,mDTP)(NavBar);