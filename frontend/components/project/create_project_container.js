import React from "react";
import { connect } from "react-redux";
import { createProject } from "../../actions/project_actions";
import ProjectForm from './project_form';


const mSTP= (state = {}, ownProps) => ({
    project: {
        author_id: '',
        title: '',
        description: '',
        body: '',
        category_id: '',
        location_id: '',
        start_date: '',
        end_date: '',
        goal: '',
        risks: ''
    },
    formType: 'Create Project'
    
});

const mDTP = (dispatch, ownProps) => ({
    action: (project) => dispatch(createProject(project))
});

export default connect(mSTP,mDTP)(ProjectForm);