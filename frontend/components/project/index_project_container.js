import React from "react";
import { connect } from "react-redux";
import { fetchProjects, fetchProject, removeProject } from "../../actions/project_actions";
import ProjectIndex from "./index_project";



const mSTP= (state = {}, ownProps) => ({
    projects: Object.values(state.entities.projects)
    
})

const mDTP = (dispatch, ownProps) => ({
    fetchProjects: () => dispatch(fetchProjects()),
    fetchProject: (projectId) => dispatch(fetchProject(projectId)),
    removeProject: (projectId) => dispatch(removeProject(projectId))
})

export default connect(mSTP,mDTP)(ProjectIndex);