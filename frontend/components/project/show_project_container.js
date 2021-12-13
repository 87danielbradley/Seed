import React from "react";
import { connect } from "react-redux";
import { fetchProject } from "../../actions/project_actions";
import ProjectShow from './show_project';


const mSTP= (state = {}, ownProps) => {
    
    return {project: state.entities.projects[ownProps.match.params.projectId],
            currentUser: state.session.currentUser}
    
}

const mDTP = (dispatch, ownProps) => ({
    fetchProject: projectId => dispatch(fetchProject(projectId))
})

export default connect(mSTP,mDTP)(ProjectShow);