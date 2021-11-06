import React from "react";
import { Link } from "react-router-dom";

class DiscoverItem extends React.Component{
    

    render(){
        return(
            <div className="discover-container">
                <div className="discover-photo">photo</div>
                <div className="discover-body">body</div>
                <div className="discover-stats">stats</div>
            </div>
        )
    }
}

export default DiscoverItem;