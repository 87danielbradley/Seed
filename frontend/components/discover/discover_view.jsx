import React from "react";
import { Link } from "react-router-dom";
import DiscoverItem from "./discover_item";

class DiscoverView extends React.Component{
    constructor(props){
        super(props)
        debugger
    }
    
    render(){
        debugger
        return(
            <div className="discover-main">
               <DiscoverItem/>
               <DiscoverItem/>
               <DiscoverItem/>
               <DiscoverItem/>
               <DiscoverItem/>
               <DiscoverItem/>
               <DiscoverItem/>
               <DiscoverItem/>
               <DiscoverItem/>

            </div>
           
        )
    }
}



export default DiscoverView;