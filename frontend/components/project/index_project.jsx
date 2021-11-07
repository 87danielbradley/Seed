import React from "react";
import ProjectIndexItem from "./index_item_project";


class ProjectIndex extends React.Component{
    componentDidMount(){
       
        this.props.fetchProjects()
        
    }
    render(){
        const {projects, removeProject} = this.props
        return(
            <div className="discover-main">
                
                {projects.map(project=>(
                    <ProjectIndexItem  project={project}
                                        removeProject={removeProject}/>
                ))}
                
            </div>
        )
    }
}

export default ProjectIndex
