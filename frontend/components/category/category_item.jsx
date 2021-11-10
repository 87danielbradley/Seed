import React from "react";
import { Link } from "react-router-dom";

class CategoryItem extends React.Component{


    render(){
        return(
            
            <div className="rec-container">
                <div className="small-pic"> picture</div>
                <div className="rec-stats">
                    <h1>{this.props.project.title}</h1>
                    <h2>{`${Math.trunc(this.props.project.pledged_amt/this.props.project.goal*100)}% funded`}</h2>
                    <h3>{`By ${this.props.project.author}`}</h3>
                    <div className="rec-stats-icons-container">
                        <button className="rec-stats-icons"><i className="far fa-bookmark"></i>   </button>
                        <button className="rec-stats-icons"><i className="far fa-thumbs-up"></i>   </button>
                        <button className="rec-stats-icons"><i className="far fa-thumbs-down"></i></button>
                    </div>
                </div>
            
            </div>
            
        )
    }
}

export default CategoryItem;