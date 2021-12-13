import React from "react";
import { Link } from "react-router-dom";
import DiscoverItem from "./discover_item";

class DiscoverView extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            numProjects: 12
        }

        this.handleClick = this.handleClick.bind(this)
    }


     componentDidMount(){
       
        
        this.props.fetchProjects()
           
        
    }

    handleClick(event){
        event.preventDefault()
        const addProjects = this.state.numProjects + 3
        this.setState({numProjects: addProjects})
        debugger
    }
    
    render(){
        debugger
        const {projects} = this.props
        
        return[
           
            (typeof projects !== 'undefined') ? (
        
            <div>
                
                <h1 className="discover-title">Explore <span className="discover-green">{this.props.projects.length} projects</span></h1>
            <div className="discover-main" key={this.state.numProjects}>
                
                {projects.slice(0,this.state.numProjects).map(project=>(
                    <DiscoverItem  key={`project${project.id}`} project={project}
                                        />
                ))}
                
            </div>
            <button className="discover-button" onClick={()=>this.handleClick(event)}>Load more</button>
            </div>
           ) : null
            
            ]
        
    }
}



export default DiscoverView;