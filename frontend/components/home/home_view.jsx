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
                    <div className="cat-picture-main"><a href="https://87danielbradley.github.io/NodeDominance/index"><img id="nodedominance" src="https://raw.githubusercontent.com/87danielbradley/NodeDominance/main/screenShot.png"/> </a></div>
                    <h1><a href="https://github.com/87danielbradley/NodeDominance">Node Dominance</a></h1>
                    <h2>This game is a single page app developed in Javascript</h2>
                    <h3><a href="https://github.com/87danielbradley">By Daniel Bradley</a></h3>

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
                        
                        <div className="rec-container">
                            <div className="small-pic"> <a href="https://github.com/87danielbradley/Seed"> <img src="https://github.com/87danielbradley/Seed/blob/main/app/assets/images/Screen%20Shot%202021-11-11%20at%209.39.53%20PM.png?raw=true"/></a></div>
                            <div className="rec-stats">
                                <h1><a href="https://github.com/87danielbradley/Seed">Kickstarter Clone</a></h1>
                                <h2>{`75% funded`}</h2>
                                <h3><a href="https://github.com/87danielbradley/">By Daniel Bradley</a></h3>
                                <div className="rec-stats-icons-container">
                                    <button className="rec-stats-icons"><i className="far fa-bookmark"></i>   </button>
                                    <button className="rec-stats-icons"><i className="far fa-thumbs-up"></i>   </button>
                                    <button className="rec-stats-icons"><i className="far fa-thumbs-down"></i></button>
                                </div>
                            </div>
                        
                        </div>

                        <div className="rec-container">
                            <div className="small-pic"> <a href="https://public.tableau.com/app/profile/daniel.bradley1709/viz/citi_bike_public/Story?publish=yes"> <img src="https://camo.githubusercontent.com/5cd9a3653373b2389b7a776a63938736347fc9f703d9d3ca4e598dd1530ad571/68747470733a2f2f7075626c69632e7461626c6561752e636f6d2f7374617469632f696d616765732f63692f636974695f62696b655f7075626c69632f53746f72792f315f7273732e706e67"/></a></div>
                            <div className="rec-stats">
                                <h1><a href="https://github.com/87danielbradley/Tableau-Challenge#">City Bike Dashboard</a></h1>
                                <h2>{`100% funded`}</h2>
                                <h3><a href="https://github.com/87danielbradley/">By Daniel Bradley</a></h3>
                                <div className="rec-stats-icons-container">
                                    <button className="rec-stats-icons"><i className="far fa-bookmark"></i>   </button>
                                    <button className="rec-stats-icons"><i className="far fa-thumbs-up"></i>   </button>
                                    <button className="rec-stats-icons"><i className="far fa-thumbs-down"></i></button>
                                </div>
                            </div>
                        
                        </div>

                        <div className="rec-container">
                            <div className="small-pic"> <a href="https://87danielbradley.github.io/Chemostat-Optimization/"><img src="https://raw.githubusercontent.com/87danielbradley/Chemostat-Optimization/master/assets/Screen%20Shot%202021-11-11%20at%209.16.19%20PM.png"/></a></div>
                            <div className="rec-stats">
                                <h1><a href="https://github.com/87danielbradley/Chemostat-Optimization">Two Feed Chemostat Optimization</a></h1>
                                <h2>{`25% funded`}</h2>
                                <h3><a href="https://github.com/87danielbradley/Chemostat-Optimization">By Daniel Bradley</a></h3>
                                <div className="rec-stats-icons-container">
                                    <button className="rec-stats-icons"><i className="far fa-bookmark"></i>   </button>
                                    <button className="rec-stats-icons"><i className="far fa-thumbs-up"></i>   </button>
                                    <button className="rec-stats-icons"><i className="far fa-thumbs-down"></i></button>
                                </div>
                            </div>
                        
                        </div>




        
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