import React from "react";
import { Link } from "react-router-dom";
import DiscoverItem from "./discover_item";

class DiscoverView extends React.Component{
     componentDidMount(){
       
        
        this.props.fetchProjects()
           
        
    }
    
    render(){
        
        const {projects} = this.props
        
        return[
           
            (typeof projects !== 'undefined') ? (
        
            <div>
                
                <h1 className="discover-title">Explore <span className="discover-green">{this.props.projects.length} projects</span></h1>
            <div className="discover-main">
                
                {projects.slice(-12).map(project=>(
                    <DiscoverItem  key={`project${project.id}`} project={project}
                                        />
                ))}
                
            </div>
            </div>
           ) : <div>loading</div>
            
            ]
        
    }
}



export default DiscoverView;