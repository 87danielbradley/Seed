import React from "react";
import { Link } from "react-router-dom";



class HomeView extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        
        return(
            <div className="home-main">
            <h1>Creative work shows us what’s possible.</h1><h1>
Help fund it here.</h1>
            <div className="home-large-container">
                
                <div className="home-med-container-left">FEATURED PROJECT
                </div>
                
                <div className="home-med-container-right">RECOMMENDED FOR YOU
                </div>
                
            </div>
            </div>
           
        )
    }
}



export default HomeView;