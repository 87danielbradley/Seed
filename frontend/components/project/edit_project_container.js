import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { editProject, fetchProject, removeProject } from "../../actions/project_actions";
import ProjectForm from './project_form';



class EditProjectForm extends React.Component{
    
    componentDidMount(){
        this.props.fetchProject(this.props.match.params.projectId)
    }

    render(){
        
        if (!this.props.project) return null;
        return (
            <ProjectForm action={this.props.action} formType={this.props.formType} project={this.props.project} currentUser={this.props.currentUser} removeProject={this.props.removeProject} history={this.props.history}/>
        )
    }
}



const mSTP= (state = {}, ownProps) => ({
    project: state.entities.projects[ownProps.match.params.projectId],
    formType: 'Update Project',
     currentUser: state.session.currentUser
    
})

const mDTP = (dispatch, ownProps) => ({
    
    fetchProject: (projectId) => dispatch(fetchProject(projectId)),
    action: (project) => dispatch(editProject(project)),
    removeProject: (projectId) => dispatch(removeProject(projectId))
})

export default connect(mSTP,mDTP)(EditProjectForm);