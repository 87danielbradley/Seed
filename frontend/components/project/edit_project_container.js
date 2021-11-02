import React from "react";
import { connect } from "react-redux";
import { editProject, fetchProject } from "../../actions/project";
import ProjectForm from './project_form';


class EditProjectForm extends React.Component{
    // constructor(props) {
    //     super(props)
    // }
    componentDidMount(){
        this.props.fetchProject(this.props.match.params.projectId)
    }

    render(){

        if (!this.props.project) return null;
        return (
            <ProjectForm action={this.props.action} formType={this.props.formType} project={this.props.project} />
        )
    }
}



const mSTP= (state = {}, ownProps) => ({
    project: state.entities.projects[ownProps.match.params.projectId],
    formType: 'Update Project'
    
})

const mDTP = (dispatch, ownProps) => ({
    
    fetchProject: (projectId) => dispatch(fetchProject(projectId)),
    action: (project) => dispatch(editProject(project))
})

export default connect(mSTP,mDTP)(EditProjectForm);