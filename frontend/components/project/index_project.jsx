import React from "react";
import ProjectIndexItem from "./index_item_project";


class ProjectIndex extends React.Component{
    componentDidMount(){
       
        this.props.fetchProjects()
        
    }
    render(){
        const {projects, removeProject} = this.props
        return(
            <div>
                <ul>
                    {projects.map(project=>(
                        <ProjectIndexItem  project={project}
                                            removeProject={removeProject}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ProjectIndex
