import React from 'react';
import { connect } from 'react-redux';
import {logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import ProfileView from "./profile_view"


logout
const mSTP = (state, ownProps) => {
  return {
    formType: 'profile'
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(ProfileView);