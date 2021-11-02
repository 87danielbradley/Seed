import React from "react";
import { connect } from "react-redux";
import { fetchProjects, fetchProject, removeProject } from "../../actions/project";
import ProjectForm from './project_form';


const mSTP= (state = {}, ownProps) => ({
    projects: Object.values(state.entities.projects)
    
})

const mDTP = (dispatch, ownProps) => ({
    fetchProjects: (data) => dispatch(fetchProjects(data)),
    fetchProject: (projectId) => dispatch(fetchProject(projectId)),
    removeProject: (projectId) => dispatch(removeProject(projectId))
})

export default connect(mSTP,mDTP)(ProjectForm);