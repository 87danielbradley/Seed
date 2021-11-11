import React from "react";
import { Link } from "react-router-dom";
import HomeItem from "./home_item";



class HomeView extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        
        return(
            <div className="home-main">
            <h1>Creative work shows us what’s possible.</h1>
            <h2>Help fund it here.</h2>
            <div className="home-large-container">
                
                <div className="home-med-container-left">
                    <h4>FEATURED PROJECT</h4>
                    <div className="cat-picture-main">Picture</div>
                    <h1>My Javascript Project</h1>
                    <h2>I designed and coded my own game</h2>
                    <h3>By Daniel Bradley</h3>

                    <div className="featured-links">
                        <button className="featured-remind"><i className="far fa-bookmark"></i> Remind me</button>

                        <div className="featured-likes">
                            <button className="rec-stats-icons"><i className="far fa-thumbs-up"></i>   </button>
                            <button className="rec-stats-icons"><i className="far fa-thumbs-down"></i></button>
                        </div> 
                    </div>
                </div>
                
                <div className="home-med-container-right">    RECOMMENDED FOR YOU
                    <div className="category-container">
                        <HomeItem />
                        <HomeItem />
                        <HomeItem />
        
                    </div>
                    <div>
                        tabs
                    </div>
                </div>
                
            </div>
            </div>
           
        )
    }
}



export default HomeView;