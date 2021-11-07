import React from "react";
import { Link } from "react-router-dom";

class DiscoverItem extends React.Component{
    

    render(){
        return(
             <div className="discover-container">
                
                <div className="discover-photo">photo</div>
                <div className="discover-body">
                    <Link to={`/projects/${this.props.project.id}`}>{this.props.project.title}</Link>
                    <h3>{this.props.project.description}</h3>
                    <h3>by ...</h3>
                </div>
                <div className="discover-stats">
                    <h3>{this.props.project.category_id}</h3>
                </div>
            </div>
        )
    }
}

export default DiscoverItem;