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
                    <h3>{this.props.project.author}</h3>
                </div>
                <div className="discover-stats">
                    <div className="progress-container"><div className="progress-bar" style={{width: `${Number(100*this.props.project.pledged_amt/this.props.project.goal).toFixed(0)}%`}}></div></div>
                    <h3>{`$${this.props.project.pledged_amt}`}</h3>
                    <h3>{`${Number(100*this.props.project.pledged_amt/this.props.project.goal).toFixed(0)}% funded`}</h3>
                    <h3>{`${Math.ceil(((new Date(this.props.project.end_date.split('T')[0]))-(new Date()))/(1000 * 3600 * 24))} days to go`}</h3>

                    <div className="discover-links">
                        <Link to="/discover" className="discover-link">{this.props.project.category}</Link>
                        <Link to="/" className="discover-link"><i className="fas fa-map-marker-alt"></i>{this.props.project.location}</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default DiscoverItem;


