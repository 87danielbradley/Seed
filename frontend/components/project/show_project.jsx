import React from "react";
import { Link } from "react-router-dom";


class ProjectShow extends React.Component{
    componentDidMount(){
        debugger
        this.props.fetchProject(this.props.match.params.projectId)
    }

    render(){
        return (
            <div>
                <h1>{ this.props.project.title }</h1>
                <h1>{ this.props.project.body }</h1>
                <h1>{ this.props.project.description}</h1>
                <h1>{ this.props.project.risks }</h1>
                <h1>{ this.props.project.goal }</h1>
                <h1>{ this.props.project.category_id }</h1>
                <h1>{ this.props.project.location_id }</h1>
            </div>
        )
    }
}

export default ProjectShow;