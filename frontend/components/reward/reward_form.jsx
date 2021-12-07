import React from "react";
import { Link } from "react-router-dom";

class RewardForm extends React.Component{
    constructor(props){
        
        super(props);
        this.state = this.props.reward;

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.action(this.state);
        this.props.history.push(`/`)
    }

    update(field){
        
        return (event) => this.setState({[field]: event.target.value})
    }
    
    render(){
       
        return(
           <div className="reward-form-container">
               
               <form className="reward-form" onSubmit={this.handleSubmit}>
                    <div className="large-form-box-title">
                        <h2>Start with the basics</h2>
                        <h3>Make it easy for people to learn about your reward</h3>
                    </div>
                    <div className="large-form-box">
                        <div className="small-form-box-left">
                            <h3>reward title</h3>
                            <p>Write a clear, brief title and subtitle to help people quickly understand your reward. Both will appear on your reward and pre-launch pages.

Potential backers will also see them if your reward appears on category pages, search results, or in emails we send to our community.</p>
                        </div>
                        <div className="small-form-box-right">
                            <div className="xsmall-form-box">
                                <label className="reward-form-item" htmlFor="reward-form-title">Title
                                </label>
                                <input 
                                    id="reward-form-title"
                                    className="reward-form-item"
                                    placeholder="The Next Generation Pay to Win Game"
                                    type="text"
                                    value={this.state.pledge_amount}
                                    onChange={this.update('pledge_amount')}
                                />
                            </div>
                            <div className="xsmall-form-box">
                                <label className="reward-form-item" htmlFor="reward-form-description">Subtitle
                                </label>
                                <textarea
                                    placeholder="Explore the world around you with virtual rose tinted glasses."
                                    id="reward-form-description"
                                    className="reward-form-item"
                                    value={this.state.description}
                                    onChange={this.update('description')}
                                />
                            </div>
                        </div>                       
                    </div>
                    
                    <div className="large-form-box">

                        <div className="small-form-box-left">
                            <h3>reward category</h3>
                            <p>Choose the category that most closely aligns with your reward.

Think of where backers may look to find it. Reach a more specific community by also choosing a subcategory.

You’ll be able to change the category and subcategory even after your reward is live.</p>
                       
                        </div>


                        <div className="small-form-box-right">
                            <div className="xsmall-form-box">
                                <select className="reward-form-item" 
                                        id="shipping-select" 
                                        placeholder="test"
                                        onChange={this.update('shipping_type')}>
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
                            <h3>Funding goal</h3>
                            <p>Set an achievable goal that covers what you need to complete your reward.

Funding is all-or-nothing. If you don’t meet your goal, you won’t receive any money.</p>
                        
                        </div>


                        <div className="small-form-box-right">
                            <div className="xsmall-form-box">
                                <label className="reward-form-item" htmlFor="reward-form-goal">Goal Amount
                                </label>
                                <input 
                                    id="reward-form-goal"
                                    className="reward-form-item"
                                    placeholder="0"
                                    type="text"
                                    value={this.state.limit}
                                    onChange={this.update('limit')}
                                />
                            </div>
                        </div>        
                    </div>
                    <div className="large-form-box">

                        <div className="small-form-box-left">
                            <h3>Target launch date (optional)</h3>
                            <p>We’ll provide you with recommendations on when to complete steps that may take a few days to process. You can edit this date up until the moment you launch your reward, which must always be done manually.</p>
                        
                        </div>


                        <div className="small-form-box-right">
                            <div className="xsmall-form-box">
                                <label className="reward-form-item" htmlFor="reward-form-start">Start Date
                                </label>
                                <input 
                                    id="reward-form-start"
                                    className="reward-form-item"
                                    placeholder="MM-DD-YYYY"
                                    type="text"
                                    value={this.state.delivery_date}
                                    onChange={this.update('delivery_date')}
                                />
                            </div>


                            <div className="xsmall-form-box-right">
                                <h3>We'll recommend when you should:</h3>
                                <ul>
                                    <li>Confirm your identity and provide payment details</li>
                                    <li>Submit your reward for review</li>
                                </ul>
                            </div>
                            
                        </div>
                        </div>
                    {/* 
                    <div className="large-form-box">

                        <div className="small-form-box-left">
                            <h3>Campain duration</h3>
                            <p>Set a time limit for your campaign. You won’t be able to change this after you launch.</p>
                        </div>


                        <div className="small-form-box-right">
                            <div className="xsmall-form-box">
                                <label className="reward-form-item" htmlFor="reward-form-end">End Date
                                </label>
                                <input 
                                    id="reward-form-end"
                                    className="reward-form-item"
                                    placeholder="MM-DD-YYYY"
                                    type="text"
                                    value={this.state.endDate}
                                    onChange={this.update('end_date')}
                                />
                            </div>                            
                        </div>
                    </div>
                    <div className="large-form-box-title">
                        <h2>Introduce your reward</h2>
                        <h3>Tell people why they should be excited about your reward. Get specific but be clear and be brief.</h3>
                    </div>
                    <div className="large-form-box-body">

                        <div className="small-form-box-left">
                            <h3 className="reward-form-description">reward description</h3>
                            <p className="reward-form-description">Describe what you're raising funds to do, why you care about it, how you plan to make it happen, and who you are. Your description should tell backers everything they need to know. If possible, include images to show them what your reward is all about and what rewards look like.</p>
                        
                        </div>
                        <textarea
                            id="reward-form-body"
                            placeholder="Write about your reward like you're explaining it to a friend..."
                            value={this.state.body}
                            onChange={this.update('body')}
                        />
                        
                        
                    </div>

                    <div className="large-form-box">

                        <div className="small-form-box-left">
                            <h3>Risks and challenges</h3>
                            <p>Be honest about the potential risks and challenges of this reward and how you plan to overcome them to complete it.</p>
                        </div>


                        <div className="small-form-box-right">
                            <div className="xsmall-form-box">
                                <label className="reward-form-item" htmlFor="reward-form-risks">Risks
                                </label>
                                <textarea
                                    id="reward-form-risk"
                                    className="reward-form-item"
                                    placeholder="Common risks and challenges you may want to address include budgeting, timelines for rewards and the reward itself, the size of your audience..."
                                    value={this.state.risks}
                                    onChange={this.update('risks')}
                                />
                            </div>                            
                        </div>
                    </div>

                   
                   
                   
                
                {(this.props.currentUser.id === this.props.reward.author_id && this.props.formType === 'Update reward') ?       
                <button className="reward-form-submit" type="submit" value={this.props.formType}>Update reward</button> :
                (this.props.formType === 'Create reward') ? <button className="reward-form-submit" type="submit" value={this.props.formType}>Create reward</button>:
                <button className="reward-form-submit" onClick={() => this.props.history.push('/')}>Return Home</button>}
                
                
                

                 */}
                
                
               </form>
           </div>
        )
    }
}



export default RewardForm;