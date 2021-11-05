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
                <Link className="category-link" to="/">{`Arts`}</Link>
                <Link className="category-link" to="/" >{`Comics & Illustration`}</Link>
                <Link className="category-link" to="/" >{`Design & Tech`}</Link>
                <Link className="category-link " to="/">{`Film`}</Link>
                <Link className="category-link " to="/">{`Food & Craft`}</Link>
                <Link className="category-link " to="/">{`Games`}</Link>
                <Link className="category-link " to="/">{`Music`}</Link>
                <Link className="category-link " to="/">{`Publishing`}</Link>
            </div>
           
           
        )
    }
}



export default CategoryBar;