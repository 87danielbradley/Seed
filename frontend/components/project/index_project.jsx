import React from "react";
import ProjectIndexItem from "./index_item_project";


class ProjectIndex extends React.Component{
    componentDidMount(){
        this.props.fetchProjects()
    }
    render(){
        return(
            <div>
                <ul>
                    {this.props.projects.map(project=>(
                        <ProjectIndexItem  project={this.props.project}
                                            removeProject={this.props.removeProject}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ProjectIndex
