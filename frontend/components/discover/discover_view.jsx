import React from "react";
import { Link } from "react-router-dom";
import DiscoverItem from "./discover_item";

class DiscoverView extends React.Component{
     componentDidMount(){
       debugger
        this.props.fetchProjects({category: this.props.match.params.categoryId})
        
    }
    
    render(){
        
        const {projects, removeProject} = this.props
        return(
            <div className="discover-main">
                
                {projects.map(project=>(
                    <DiscoverItem  key={`project${project.id}`} project={project}
                                        removeProject={removeProject}/>
                ))}
                
            </div>
           
        )
    }
}



export default DiscoverView;