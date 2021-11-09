import React from "react";
import { Link } from "react-router-dom";



class RewardElement extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        
        return(
            
            <button className="reward-button">
                
                <h1>{`Pledge $${this.props.reward.pledge_amount} or more`}</h1>
                <h1>{this.props.reward.title}</h1>
                <h1>{this.props.reward.description}</h1>
                <h1>{`ESTIMATED DELIVERY ${this.props.reward.delivery_date}`}</h1>
                <h1>{`SHIPS TO ${this.props.reward.shipping_type}`}</h1>
                <div>{`Limited ${this.props.reward.limit}`}</div>

            </button>
           
        )
    }
}



export default RewardElement;