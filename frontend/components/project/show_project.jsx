import React from "react";
import { Link } from "react-router-dom";


class ProjectShow extends React.Component{
    componentDidMount(){
        
        
        this.props.fetchProject(this.props.match.params.projectId)
    }

    render(){
        
        return (
            <div>
                <h1>{ this.props.project.title }</h1>
                <h1>{ this.props.project.body }</h1>
                <h1>{ this.props.project.description}</h1>
                
            </div>
        )
    }
}

export default ProjectShow;