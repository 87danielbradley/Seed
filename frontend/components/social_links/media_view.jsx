import React from "react";
import { Link } from "react-router-dom";
import favicon from '../../../app/assets/images/favicon.png'

class SocialView extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        
        return(
            
            
            <div className="social-bar-main">
                <div><img src={favicon} alt="Logo" />  SeedBed, PBC © 2021  </div>
                <div className="social-links">
                    <a href="https://github.com/87danielbradley" ><i className="fab fa-github-square"></i></a>
                    <a href="https://www.linkedin.com/in/87danielbradley/" ><i className="fab fa-linkedin"></i></a>
                    <a href="https://angel.co/u/daniel-james-bradley" ><i className="fab fa-angellist"></i></a>
                </div>
               
            </div>
           
           
        )
    }
}



export default SocialView;