import React from "react";
import { Link } from "react-router-dom";
import { createUser } from "../../actions/session";

class NavBar extends React.Component{
    
    static display = this.props.currentUser ? (
        <div>
            <h3>Symbol to be Replaced</h3>
            <button onClick={this.props.logout}>Logout</button>
        </div>
    ):(
        <div>
            <Link className='login-button' to="/login">Log in</Link>
        </div>
    );

    render(){
        debugger
        return(
            <header className="nav-bar">
                <h1 className="nav-title">SEED</h1>
                <div>
                    {display}
                </div>
            </header>
        )
    }
}



export default NavBar;