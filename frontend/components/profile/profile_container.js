import React from 'react';
import { connect } from 'react-redux';
import {logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import ProfileView from "./profile_view"
import { fetchProjects } from "../../actions/project_actions";

logout
const mSTP = (state, ownProps) => {
    debugger
  return {
    formType: 'profile',
    projects: state.entities.projects
    
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
    fetchProjects: (data) => dispatch(fetchProjects(data))
  };
};

export default connect(mSTP, mDTP)(ProfileView);