import React from "react";
import { connect } from "react-redux";
import { fetchProjects, fetchProject, removeProject } from "../../actions/project_actions";
import ProjectIndex from "./index_project";



const mSTP= (state = {}, ownProps) => {
    
    return {
    projects: Object.values(state.entities.projects),
    currentUser: state.session.currentUser
    
}}

const mDTP = (dispatch, ownProps) => ({
    fetchProjects: (data) => dispatch(fetchProjects(data)),
    fetchProject: (projectId) => dispatch(fetchProject(projectId))
})

export default connect(mSTP,mDTP)(ProjectIndex);