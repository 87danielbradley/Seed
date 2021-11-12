import React from "react";
import { connect } from "react-redux";
import { createProject } from "../../actions/project_actions";
import ProjectForm from './project_form';


const mSTP= (state = {}, ownProps) => {
   
    return {project: {
        author_id: `${state.session.currentUser.id}`,
        title: '',
        description: '',
        body: '',
        category_id: '1',
        location_id: '1',
        start_date: '',
        end_date: '',
        goal: '',
        risks: '',
        url: "https://images.unsplash.com/photo-1598620617377-3bfb505b4384?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGVtcHR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    currentUser: state.session.currentUser,
    formType: 'Create Project'}
    
};

const mDTP = (dispatch, ownProps) => ({
    action: (project) => dispatch(createProject(project))
});

export default connect(mSTP,mDTP)(ProjectForm);