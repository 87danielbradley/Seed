import React from 'react';
import { connect } from 'react-redux';
import {logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import ProfileView from "./profile_view"
import { fetchProjects, removeProject } from "../../actions/project_actions";


logout
const mSTP = (state, ownProps) => {
    debugger
    const projectList = (state.session.currentUser ? Object.values(state.entities.projects).filter(project => project.author_id === state.session.currentUser.id) : [])
  return {
    formType: 'profile',
    projects: projectList
    
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
    fetchProjects: (data) => dispatch(fetchProjects(data)),
    removeProject: (projectId) => dispatch(removeProject(projectId))
  };
};

export default connect(mSTP, mDTP)(ProfileView);