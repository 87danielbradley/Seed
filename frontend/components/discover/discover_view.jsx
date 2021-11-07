import React from "react";
import { Link } from "react-router-dom";
import DiscoverItem from "./discover_item";

class DiscoverView extends React.Component{
     componentDidMount(){
       
        this.props.fetchProjects({category: this.props.match.params.categoryId})
        
    }
    
    render(){
        
        const {projects, removeProject} = this.props
        return(
            <div>
                <h1 className="discover-title">Explore <span className="discover-green">{this.props.projects.length} projects</span></h1>
            <div className="discover-main">
                
                {projects.slice(0,12).map(project=>(
                    <DiscoverItem  key={`project${project.id}`} project={project}
                                        removeProject={removeProject}/>
                ))}
                
            </div>
            </div>
           
        )
    }
}



export default DiscoverView;