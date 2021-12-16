import React from "react";
import { Link } from "react-router-dom";

class RewardForm extends React.Component{
    constructor(props){
        
        super(props);
        this.state = {...this.props.reward,
            project_id: this.props.project.id
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }
    handleSubmit(event) {
        debugger
        event.preventDefault();
        this.props.createReward(this.state);
        
    }

    update(field){
        debugger
        
        return (event) => this.setState({[field]: event.target.value})
    }
    
    render(){
       
        return(
           <div className="reward-form-container">
               
               <form className="reward-form" onSubmit={this.handleSubmit}>
                    
                    <div className="large-form-box">
                       
                        <div className="small-form-box-right">
                            <div className="xsmall-form-box">
                                <label className="reward-form-item" htmlFor="reward-form-title">Title
                                </label>
                                <input 
                                    id="reward-form-title"
                                    className="reward-form-item"
                                    placeholder="Signed limited-edition"
                                    type="text"
                                    value={this.state.title}
                                    onChange={this.update('title')}
                                />
                            </div>
                            
                        </div>                       
                    </div>
                    <div className="large-form-box">
                       
                        <div className="small-form-box-right">
                            
                            <div className="xsmall-form-box">
                                <label className="reward-form-item" htmlFor="reward-form-description">Amount
                                </label>
                                <input
                                    placeholder="1"
                                    id="reward-form-description"
                                    className="reward-form-item"
                                    type="text"
                                    value={this.state.pledge_amount}
                                    onChange={this.update('pledge_amount')}
                                />
                            </div>
                        </div>                       
                    </div>
                    <div className="large-form-box">
                       
                        <div className="small-form-box-right">
                            
                            <div className="xsmall-form-box">
                                <label className="reward-form-item" htmlFor="reward-form-description">Description
                                </label>
                                <textarea
                                    placeholder="Get an early copy - hot off the presses!"
                                    id="reward-form-description"
                                    className="reward-form-item"
                                    
                                    value={this.state.description}
                                    onChange={this.update('description')}
                                />
                            </div>
                        </div>                       
                    </div>
                    <div className="large-form-box">
                        <div className="small-form-box-right">
                            <h3>Estimated delivery</h3>
                            <p>Give yourself plenty of time. It's better to deliver to backers ahead of schedule than behind.</p>
                        </div>
                       
                        <div className="small-form-box-right">
                            <div className="xsmall-form-box">
                                <label className="reward-form-item" htmlFor="reward-form-start">
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

                            
                        </div>
                    </div>
                    
                    <div className="large-form-box">


                        <div className="small-form-box-right">
                            <div className="xsmall-form-box">
                                <h3>Estimated delivery</h3>
                                <select className="reward-form-item" 
                                        id="shipping-select" 
                                        placeholder="test"
                                        onChange={this.update('shipping_type')}>
                                    <option value="0">No shipping (e.g., digital reward)</option>
                                    <option value="1">Only certain countries</option>
                                    <option value="2">Anywhere in world</option>
                                </select>
                            </div>
                            
                        </div>
                        
                    </div>
                   
                    <div className="large-form-box">


                        <div className="small-form-box-right">
                            <div className="xsmall-form-box">
                                <label className="reward-form-item" htmlFor="reward-form-goal">Project quantity
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
                    
                 
                   
                   
                   
                
                {(this.props.currentUser.id === this.props.project.author_id) ?       
                <button className="reward-form-submit" type="submit" value={this.props.formType}>Save reward</button> :
                <button className="reward-form-submit" onClick={() => this.props.history.push('/')}>Return Home</button>}
                
                
                
               </form>
           </div>
        )
    }
}



export default RewardForm;