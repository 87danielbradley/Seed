import React from "react";
import { Link } from "react-router-dom";
import CreateProjectContainer from "../project/create_project_container";
import { createUser } from "../../actions/session_actions";



class NavBar extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        
        return(
            
            <div className="nav-bar">
                <div>
                <Link className="nav-link" to="/discover">Discover</Link>
                <Link className="nav-link" to="/start" >Start a project</Link>
                </div>
                <h1 className="nav-title"><Link className="nav-title" to="/">SEEDBED</Link></h1>
                <div>
                <Link className="nav-link " to="/">Search <i className="fas fa-search"></i></Link>
                {this.props.currentUser ? (
                    <button onClick={this.props.logout}>Logout</button>
                ):(
                    <Link className='nav-link login-button' to="/login">Log in</Link>
                )}
                </div>
            </div>
           
        )
    }
}



export default NavBar;