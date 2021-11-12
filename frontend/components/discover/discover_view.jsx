import React from "react";
import { Link } from "react-router-dom";
import DiscoverItem from "./discover_item";

class DiscoverView extends React.Component{
     componentDidMount(){
       
        // this.props.fetchProjects({category: this.props.match.params.category})
        
        this.props.fetchProjects()
            .then(() => window.scroll({top: 0,behavior: 'smooth'}))
        
    }
    
    render(){
        
        const {projects, removeProject} = this.props
        
        return[
           
            (typeof projects !== 'undefined') ? (
        
            <div>
                
                <h1 className="discover-title">Explore <span className="discover-green">{this.props.projects.length} projects</span></h1>
            <div className="discover-main">
                
                {projects.slice(-12).map(project=>(
                    <DiscoverItem  key={`project${project.id}`} project={project}
                                        removeProject={removeProject}/>
                ))}
                
            </div>
            </div>
           ) : <div>loading</div>
            
            ]
        
    }
}



export default DiscoverView;