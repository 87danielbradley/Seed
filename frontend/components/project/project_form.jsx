import React from "react";
import { Link } from "react-router-dom";
import CreateRewardContainer from "../reward/create_reward_container";

class ProjectForm extends React.Component{
    constructor(props){
        
        super(props);
        this.state = {...this.props.project,
            rewards: 0,
            tab: 'basics'
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.addReward = this.addReward.bind(this)
    }
    handleSubmit(event) {
        
        event.preventDefault();
        this.props.action(this.state);
        this.props.history.push(`/`)
    }
    tabSelect(field){
        this.setState({tab: field})
    }
    update(field){
        
        return (event) => this.setState({[field]: event.target.value})
    }
    addReward(e){
        e.preventDefault()
        this.setState({rewards: this.state.rewards+1})
    }
    
    render(){
        const rewardList = []
        for(var i = 0; i < this.state.rewards; i++){
            rewardList.push(<CreateRewardContainer project={this.props.project}/>)
        }
       
        return(
           <div className="project-form-container">
               
               {/* {(this.props.currentUser.id === this.props.project.author_id && this.props.formType === 'Update Project') ? <div><Link to="/"><button onSubmit={() => this.props.removeProject(this.props.project.id)}>Delete project</button></Link></div> : null} */}
               {(this.props.currentUser.id === this.props.project.author_id && this.props.formType === 'Update Project') ?       
                <div className="project-edit-tab-nav">
                        <div className="tab-button-container">
                            <button className="project-edit-tab-button" onClick={()=> this.tabSelect('basics')}>Basics</button>
                        </div>
                        <div className="tab-button-container">
                            <button className="project-edit-tab-button" onClick={()=> this.tabSelect('rewards')}>Rewards</button>
                        </div>
                            

                        
                </div> :null}
               
               {(this.state.tab === 'basics')?
               
               <form className="project-form" onSubmit={this.handleSubmit}>
                    <div className="large-form-box-title">
                        <h2>Start with the basics</h2>
                        <h3>Make it easy for people to learn about your project</h3>
                    </div>
                    <div className="large-form-box">
                        <div className="small-form-box-left">
                            <h3>Project title</h3>
                            <p>Write a clear, brief title and subtitle to help people quickly understand your project. Both will appear on your project and pre-launch pages.

Potential backers will also see them if your project appears on category pages, search results, or in emails we send to our community.</p>
                        </div>
                        <div className="small-form-box-right">
                            <div className="xsmall-form-box">
                                <label className="project-form-item" htmlFor="project-form-title">Title
                                </label>
                                <input 
                                    id="project-form-title"
                                    className="project-form-item"
                                    placeholder="The Next Generation Pay to Win Game"
                                    type="text"
                                    value={this.state.title}
                                    onChange={this.update('title')}
                                />
                            </div>
                            <div className="xsmall-form-box">
                                <label className="project-form-item" htmlFor="project-form-description">Subtitle
                                </label>
                                <textarea
                                    placeholder="Explore the world around you with virtual rose tinted glasses."
                                    id="project-form-description"
                                    className="project-form-item"
                                    value={this.state.description}
                                    onChange={this.update('description')}
                                />
                            </div>
                        </div>                       
                    </div>
                    
                    <div className="large-form-box">

                        <div className="small-form-box-left">
                            <h3>Project category</h3>
                            <p>Choose the category that most closely aligns with your project.

Think of where backers may look to find it. Reach a more specific community by also choosing a subcategory.

You???ll be able to change the category and subcategory even after your project is live.</p>
                       
                        </div>


                        <div className="small-form-box-right">
                            <div className="xsmall-form-box">
                                <select className="project-form-item" 
                                        id="category-select" 
                                        placeholder="test"
                                        onChange={this.update('category_id')}>
                                    <option value="0">Category</option>
                                    <option value="1">Art</option>
                                    <option value="2">Comics</option>
                                    <option value="3">Crafts</option>
                                    <option value="4">Dance</option>
                                    <option value="5">Design</option>
                                    <option value="6">Fashion</option>
                                    <option value="7">Film and Video</option>
                                    <option value="8">Food</option>
                                    <option value="9">Games</option>
                                    <option value="10">Journalism</option>
                                    <option value="11">Music</option>
                                    <option value="12">Photography</option>
                                    <option value="13">Publishing</option>
                                    <option value="14">Technology</option>
                                    <option value="15">Theater</option>
                                </select>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="large-form-box">

                        <div className="small-form-box-left">
                            <h3>Project location</h3>
                            <p>Select the location that best describes where your project is based.</p>
                        </div>


                        <div className="small-form-box-right">
                            <div className="xsmall-form-box">
                                <select className="project-form-item" 
                                        id="location-select"
                                        onChange={this.update('location_id')}
                                >
                                    <option value="0">Location</option>
                                    <option value="1">Austrailia</option>
                                    <option value="2">Austria</option>
                                    <option value="3">Belgium</option>
                                    <option value="4">Canada</option>
                                    <option value="5">Denmark</option>
                                    <option value="6">France</option>
                                    <option value="7">Germany</option>
                                    <option value="8">Greece</option>
                                    <option value="9">Hong Kong</option>
                                    <option value="10">Ireland</option>
                                    <option value="11">Italy</option>
                                    <option value="12">Japan</option>
                                    <option value="13">Luxembourg</option>
                                    <option value="14">Mexico</option>
                                    <option value="15">New Zealand</option>
                                    <option value="16">Norway</option>
                                    <option value="17">Poland</option>
                                    <option value="18">Singapore</option>
                                    <option value="19">Slovenia</option>
                                    <option value="20">Spain</option>
                                    <option value="21">Sweden</option>
                                    <option value="22">Switzerland</option>
                                    <option value="23">the Netherlands</option>
                                    <option value="24">the United Kingdom</option>
                                    <option value="25">the United States</option>
                                </select>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="large-form-box">

                        <div className="small-form-box-left">
                            <h3>Funding goal</h3>
                            <p>Set an achievable goal that covers what you need to complete your project.

Funding is all-or-nothing. If you don???t meet your goal, you won???t receive any money.</p>
                        
                        </div>


                        <div className="small-form-box-right">
                            <div className="xsmall-form-box">
                                <label className="project-form-item" htmlFor="project-form-goal">Goal Amount
                                </label>
                                <input 
                                    id="project-form-goal"
                                    className="project-form-item"
                                    placeholder="0"
                                    type="text"
                                    value={this.state.goal}
                                    onChange={this.update('goal')}
                                />
                            </div>
                        </div>        
                    </div>
                    <div className="large-form-box">

                        <div className="small-form-box-left">
                            <h3>Target launch date (optional)</h3>
                            <p>We???ll provide you with recommendations on when to complete steps that may take a few days to process. You can edit this date up until the moment you launch your project, which must always be done manually.</p>
                        
                        </div>


                        <div className="small-form-box-right">
                            <div className="xsmall-form-box">
                                <label className="project-form-item" htmlFor="project-form-start">Start Date
                                </label>
                                <input 
                                    id="project-form-start"
                                    className="project-form-item"
                                    placeholder="MM-DD-YYYY"
                                    type="text"
                                    value={this.state.startDate}
                                    onChange={this.update('start_date')}
                                />
                            </div>


                            <div className="xsmall-form-box-right">
                                <h3>We'll recommend when you should:</h3>
                                <ul>
                                    <li>Confirm your identity and provide payment details</li>
                                    <li>Submit your project for review</li>
                                </ul>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="large-form-box">

                        <div className="small-form-box-left">
                            <h3>Campain duration</h3>
                            <p>Set a time limit for your campaign. You won???t be able to change this after you launch.</p>
                        </div>


                        <div className="small-form-box-right">
                            <div className="xsmall-form-box">
                                <label className="project-form-item" htmlFor="project-form-end">End Date
                                </label>
                                <input 
                                    id="project-form-end"
                                    className="project-form-item"
                                    placeholder="MM-DD-YYYY"
                                    type="text"
                                    value={this.state.endDate}
                                    onChange={this.update('end_date')}
                                />
                            </div>                            
                        </div>
                    </div>
                    <div className="large-form-box-title">
                        <h2>Introduce your project</h2>
                        <h3>Tell people why they should be excited about your project. Get specific but be clear and be brief.</h3>
                    </div>
                    <div className="large-form-box-body">

                        <div className="small-form-box-left">
                            <h3 className="project-form-description">Project description</h3>
                            <p className="project-form-description">Describe what you're raising funds to do, why you care about it, how you plan to make it happen, and who you are. Your description should tell backers everything they need to know. If possible, include images to show them what your project is all about and what rewards look like.</p>
                        
                        </div>
                        <textarea
                            id="project-form-body"
                            placeholder="Write about your project like you're explaining it to a friend..."
                            value={this.state.body}
                            onChange={this.update('body')}
                        />
                        
                        
                    </div>

                    <div className="large-form-box">

                        <div className="small-form-box-left">
                            <h3>Risks and challenges</h3>
                            <p>Be honest about the potential risks and challenges of this project and how you plan to overcome them to complete it.</p>
                        </div>


                        <div className="small-form-box-right">
                            <div className="xsmall-form-box">
                                <label className="project-form-item" htmlFor="project-form-risks">Risks
                                </label>
                                <textarea
                                    id="project-form-risk"
                                    className="project-form-item"
                                    placeholder="Common risks and challenges you may want to address include budgeting, timelines for rewards and the project itself, the size of your audience..."
                                    value={this.state.risks}
                                    onChange={this.update('risks')}
                                />
                            </div>                            
                        </div>
                    </div>

                    
                   
                {(this.props.currentUser.id === this.props.project.author_id && this.props.formType === 'Update Project') ?       
                <button className="project-form-submit" type="submit" value={this.props.formType}>Update Project</button> :
                (this.props.formType === 'Create Project') ? <button className="project-form-submit" type="submit" value={this.props.formType}>Create Project</button>:
                <button className="project-form-submit" onClick={() => this.props.history.push('/')}>Return Home</button>}
                
                
                

                
                
                
               </form>:
               <div>
                   <div className="large-form-box-title">
                        <h2>Add your rewards</h2>
                        <h3>Offer simple, meaningful ways to bring backers closer to your project and celebrate it coming to life.</h3>
                    </div>
                    <div className="large-form-box">
                        <div className="small-form-box-left">
                            <h3>Add a reward</h3>
                            <p>Offer tangible or intangible things that bring backers closer to your project.</p>
                        </div>

                    </div>
                   {rewardList.map( element => element)}

               {(this.props.currentUser.id === this.props.project.author_id && this.props.formType === 'Update Project') ?       
                <button className="project-reward-create" onClick={this.addReward}>Add Reward</button> :null}
                
                </div>
            }
                   
                   
                
               
           </div>
        )
    }
}



export default ProjectForm;