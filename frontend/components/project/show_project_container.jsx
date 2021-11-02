import React from "react";
import { connect } from "react-redux";
import { fetchProject } from "../../actions/project";
import ProjectShow from './show_project';


const mSTP= (state = {}, ownProps) => {
    debugger
    return {project: state.entities.projects[ownProps.match.params.projectId]}
    
}

const mDTP = (dispatch, ownProps) => ({
    fetchProject: projectId => dispatch(fetchProject(projectId))
})

export default connect(mSTP,mDTP)(ProjectShow);