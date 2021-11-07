import React from "react";
import { connect } from "react-redux";
import { fetchProject, fetchProjects, removeProject } from "../../actions/project_actions";
import DiscoverItem from "./discover_item";
import DiscoverView from "./discover_view";





const mSTP= (state = {}, ownProps) => {
    
    return({currentUser: state.session.currentUser,
    projects: Object.values(state.entities.projects)})
}
const mDTP = (dispatch, ownProps) => ({
    fetchProjects: (data) => dispatch(fetchProjects(data)),
    fetchProject: (projectId) => dispatch(fetchProject(projectId)),
    removeProject: (projectId) => dispatch(removeProject(projectId))
 
})

export default connect(mSTP,mDTP)(DiscoverView);