import React from "react";
import { Link } from "react-router-dom";
import { createUser } from "../../actions/session";

class NavBar extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        console.log(this.props)
        return(
            <header className="nav-bar">
                <h1 className="nav-title">SEED</h1>
                <div>
                    <div>
                    <Link to="/">Discover</Link>
                    <Link to="/">Start a project</Link>
                    </div>
                    <div>
                    <Link to="/">Search</Link>
                    {this.props.currentUser ? (
                        <button onClick={this.props.logout}>Logout</button>
                    ):(
                        <Link className='login-button' to="/login">Log in</Link>
                    )}
                    </div>
                </div>
            </header>
        )
    }
}



export default NavBar;