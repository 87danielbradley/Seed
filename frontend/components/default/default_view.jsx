import React from "react";
import { Link } from "react-router-dom";



class DefaultView extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        
        return(
            
            <div className="default-container">
                
                <div className="default-small-container">
                    <h1>Back it up!</h1>
                    <p>We can't find this page, but we can show you a new creative project you can help bring to life.</p>
                    <Link to="/">Take me home</Link>
                </div>
                <div className="default-404">
                    <Link className="default-404" to="/"><img src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80"/></Link>
                </div>
            </div>
           
        )
    }
}



export default DefaultView;