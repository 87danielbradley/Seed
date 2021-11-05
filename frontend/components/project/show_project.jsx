import React from "react";
import { Link } from "react-router-dom";


class ProjectShow extends React.Component{
    componentDidMount(){
        this.props.fetchProject(this.props.match.params.projectId)
    }
    componentDidUpdate(){
        // console.log('test')
    }
    
    render(){
        // console.log('state','projectShow', this.props)
        // console.log(this.state)
        const {project} = this.props
        
        return [
           
            (typeof project !== 'undefined') ? (<div>
                <h1>{ this.props.project.title }</h1>
                <h1>{ this.props.project.body }</h1>
                <h1>{ this.props.project.description}</h1>
                
            </div>) : <div>Need to Fix</div>
            ]
        
    }
}

export default ProjectShow;