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
                    <Link className="default-404" to="/">404</Link>
                </div>
            </div>
           
        )
    }
}



export default DefaultView;