import React from "react";
import { Link } from "react-router-dom";

class ProjectIndexItem extends React.Component{


    render(){
        return(
            <div>
                <Link to={`/projects/${this.props.project.id}`}>{this.props.project.title}</Link>
            </div>
        )
    }
}

export default ProjectIndexItem;