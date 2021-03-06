import React from "react";
import { Link, Route } from "react-router-dom";
import RewardElement from "../reward/reward_view";




class ProjectShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tab: 'campaign',
            reward: ''
        }
    }
    componentDidMount(){
        
        this.props.fetchProject(this.props.match.params.projectId)
            .then(response => {
                window.scroll({top: 0,behavior: 'smooth'});
                this.setState({project: response})})
    }
    tabSelect(field){
        this.setState({tab: field})
    }
    handleSubmit(event) {
        
        event.preventDefault();
        this.props.createPledge(this.state);
    }
    update(field){
        
        return (event) => this.setState({[field]: event.target.value})
    }
    rewardSelect(rewardId){
        
        return () => this.setState({reward: rewardId})
    }
    

    render(){
        
        const {project} = this.props
        
        
        return [
           
            (typeof project !== 'undefined') ? (
            <div className="project-show-main">
                
                {(this.props.currentUser !== null) ? ((this.props.currentUser.id === this.props.project.author_id) ? <div><Link to={`/projects/${this.props.match.params.projectId}/edit`}>Edit project</Link></div> : null) : null}


                   
                <div className="project-show-top-container">
                    <div className="project-show-title">
                        <h1>{ this.props.project.title }</h1>
                        <h3>{ this.props.project.description}</h3>
                    </div>
                    <div className="picture-container">
                        <div className="show-el project-show-picture"><img src={this.props.project.url}/>
                        
                        </div>
                        <div className="picture-links"> <span><i className="fas fa-seedling"></i>     Projects we love      </span><span><i className="far fa-compass"></i>     {this.props.project.category}      </span><span><i className="fas fa-map-marker-alt"></i>     {this.props.project.location}      </span></div>
                        </div>
                    <div className="show-el project-show-stats">
                        <div className="progress-container"><div className="progress-bar" style={{width: `${Number(100*this.props.project.pledged_amt/this.props.project.goal).toFixed(0)}%`}}></div></div>
                        
                            <h3>{`$${this.props.project.pledged_amt}`}</h3>
                        <h4>pledged of {`$${this.props.project.goal}`} goal</h4>

                            <h3>{`${this.props.project.pledge_count}`}</h3>
                        <h4>backers</h4>

                        <h3>{`${Math.ceil(((new Date(this.props.project.end_date.split('T')[0]))-(new Date()))/(1000 * 3600 * 24))}`}</h3>
                        <h4>days to go</h4>

                        <div>
                            <button className="show-stats-back" onClick={()=>window.scroll({
  top: 900,
  behavior: 'smooth'
})}>Seed this project</button>
                            
                            <span className="show-logo" id="github"><a className="show-logo" href="https://github.com/87danielbradley" target="_blank"><i className="fab fa-github"></i></a></span>
                            <span className="show-logo" id="linkedin"><a className="show-logo" href="https://www.linkedin.com/in/87danielbradley/" target="_blank"><i className="fab fa-linkedin"></i></a></span>
                            <span className="show-logo" id="angellist"><a className="show-logo" href="https://angel.co/u/daniel-james-bradley" target="_blank"><i className="fab fa-angellist"></i></a></span>
                        <div>

                            </div>
                            <p className="card-paragraph"><span >All or nothing.</span> This project will only be funded if it reaches its goal by {new Date(this.props.project.end_date).toString()}.</p>
                        </div>
                    
                    </div>

                </div>
                <div className="project-show-banner">
                    <div><i className="fas fa-seedling"></i> Seed connects creators with backers to fund projects.</div>
                    <div><i className="fas fa-comments"></i> Rewards aren???t guaranteed, but creators must regularly update backers.</div>
                    <div><i className="fas fa-hand-holding-usd"></i> You???re only charged if the project meets its funding goal by the campaign deadline.</div>
                </div>
                <div className="project-show-bottom-container">
                    <div className="project-show-tab">
                        <div className="project-show-tab-nav">
                            <div className="tab-button-container">
                                <button className="project-show-tab-button" onClick={()=> this.tabSelect('campaign')}>Campaign</button>
                            </div>
                            <div className="tab-button-container">
                                <button className="project-show-tab-button" onClick={()=> this.tabSelect('risks')}>Risks</button>
                            </div>
                            <div className="tab-button-container">
                                <button className="project-show-tab-button" onClick={()=> this.tabSelect('faqs')}>FAQ</button>
                            </div>

                        
                        </div>
                        <div className="project-show-tab-buttons">
                            <button className="button-back" onClick={()=>window.scroll({
                                top: 1000,

                                behavior: 'smooth'
                                })}>Seed this project</button>
                            {/* <button className="button-remind"><i className="far fa-bookmark"></i> Remind me</button> */}
                        </div>
                    </div>
                    <div className="bottom-group">
                        {(this.state.tab === 'campaign') ? <div className="bottom-container-sidebar">Story</div> : null}
                        
                        
                        <div className="bottom-container-med-left">
                            {(this.state.tab === 'campaign') ? <h1>{ this.props.project.body }</h1> : (this.state.tab === 'risks') ? <h1>{ this.props.project.risks }</h1> : <h1>No questions yet!</h1>}
                            {(this.state.tab === 'campaign') ? <h1>{ this.props.project.risks }</h1> : null}
                            
                        </div>

                        <div className="bottom-container-med-right">
                            <h3>Support</h3>
                            <div className="default-reward-button">
                            <form className="default-reward-button">
                                <h1>Pledge without a reward</h1>
                                <input 
                                    className="default-form"
                                    type="number"
                                    placeholder="10"
                                />
                                <div className="default-pledge">
                                    <h2>Back it because you believe in it.</h2>
                                    <h3>Support the project for no reward, just because it speaks to you.</h3>
                                </div>
                                <button className="default-form" onClick={ () => window.scroll({
                                top: 0,

                                behavior: 'smooth'})
                             
                                }>Continue</button>
                            </form>
                            </div>
                            {this.props.project.rewards.map(reward =>  <RewardElement rewardSelect={this.rewardSelect(reward.id)} reward={reward}/>)}
                           
                        </div>
                    </div>
                </div>
                


                
               
                
            </div>
            ) : null
            
            ]

        
        
    }
}

export default ProjectShow;