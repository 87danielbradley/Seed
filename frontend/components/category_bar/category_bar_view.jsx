import React from "react";
import { Link } from "react-router-dom";
import CreateProjectContainer from "../project/create_project_container";
import { createUser } from "../../actions/session_actions";



class CategoryBar extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        
        return(
            
            
            <div className="category-bar">
                <Link className="category-link" to="/discover/Art">{`Arts`}</Link>
                <Link className="category-link" to="/discover/Comics" >{`Comics & Illustration`}</Link>
                <Link className="category-link" to="/discover/Technology" >{`Design & Tech`}</Link>
                <Link className="category-link " to="/discover/Film & Video">{`Film`}</Link>
                <Link className="category-link " to="/discover/Food">{`Food & Craft`}</Link>
                <Link className="category-link " to="/discover/Games">{`Games`}</Link>
                <Link className="category-link " to="/discover/Music">{`Music`}</Link>
                <Link className="category-link " to="/discover/Publishing">{`Publishing`}</Link>
            </div>
           
           
        )
    }
}



export default CategoryBar;