import React from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../../actions/project_actions";

import CategoryView from "./category_view";

const mSTP= (state = {}, ownProps) => ({
    projects: Object.values(state.entities.projects).filter(project => project.category=== ownProps.match.params.category),
    currentUser: state.session.currentUser
})

const mDTP = (dispatch, ownProps) => ({
    fetchProjects: (data) => dispatch(fetchProjects(data))
})

export default connect(mSTP,mDTP)(CategoryView);