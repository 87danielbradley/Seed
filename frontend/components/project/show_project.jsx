import React from "react";
import { Link } from "react-router-dom";


class ProjectShow extends React.Component{
    componentDidMount(){
        this.props.fetchProject(this.props.match.params.projectId)
    }
    
    render(){
        console.log('state','projectShow', this.props)
        console.log(this.state)
        const {project} = this.props
        
        return [
           
            (typeof project !== 'undefined') ? (
            <div className="project-show-main">
                
                    
                <div className="project-show-top-container">
                    <div className="show-el project-show-title">
                        <h1>{ this.props.project.title }</h1>
                        <h3>{ this.props.project.description}</h3>
                    </div>
                    <div className="show-el project-show-picture">Picture
                    
                    <div> <span><i className="fas fa-seedling"></i>Projects we love</span><span><i className="far fa-compass"></i>{this.props.project.category}</span><span><i className="fas fa-map-marker-alt"></i>{this.props.project.location}</span></div>
                    </div>
                    <div className="show-el project-show-stats">Stats
                        <div className="progress-container"><div className="progress-bar" style={{width: `${Number(100*this.props.project.pledged_amt/this.props.project.goal).toFixed(0)}%`}}></div></div>
                        
                            <h3>{`$${this.props.project.pledged_amt}`}</h3>
                        <h4>pledged of {`$${this.props.project.goal}`} goal</h4>

                            <h3>{`${this.props.project.pledge_count}`}</h3>
                        <h4>backers</h4>

                        <h3>{`${Math.ceil(((new Date(this.props.project.end_date.split('T')[0]))-(new Date()))/(1000 * 3600 * 24))}`}</h3>
                        <h4>days to go</h4>

                        <div>
                            <button>Back this project</button>
                            <button><i className="far fa-bookmark"></i>Remind me</button>
                            <div>

                            </div>
                            <p><span >All or nothing.</span> This project will only be funded if it reaches its goal by {new Date(this.props.project.end_date).toString()}.</p>
                        </div>
                        <div className="project-show-banner">
                            <div>Kickstarter connects creators with backers to fund projects.</div>
                            <div>Rewards aren’t guaranteed, but creators must regularly update backers.</div>
                            <div>You’re only charged if the project meets its funding goal by the campaign deadline.</div>
                        </div>
                    
                    </div>

                </div>
                


                <h1>{ this.props.project.body }</h1>
               
                
            </div>
            ) : this.props.history.push('/404')
            ]
        
    }
}

export default ProjectShow;