import React from "react";
import { Link } from "react-router-dom";

class HomeItem extends React.Component{


    render(){
        return(
            
            <div className="rec-container">
                <div className="small-pic"> picture</div>
                <div className="rec-stats">
                    <h1>Project Name</h1>
                    <h2>{`40% funded`}</h2>
                    <h3>By Daniel Bradley</h3>
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

export default HomeItem;