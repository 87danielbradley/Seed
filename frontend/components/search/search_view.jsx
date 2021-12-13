import React from "react";
import { Link } from "react-router-dom";

class SearchBar extends React.Component{
    constructor(props){
       
        super(props);
        this.state = {
            query: ''
        }
        this.update = this.update.bind(this);
        this.selectProject = this.selectProject.bind(this);
    }
    
    
    update(event){
        this.setState({query: event.currentTarget.value})
        
    }
    matches(){
        const matches = [];
        if (this.state.query.length === 0 ) {
            return Object.values(this.props.projects)
        }

        this.props.projects.forEach(project => {
            const subString = project.title.slice(0, this.state.query.length);
            if (subString.toLowerCase() === this.state.query.toLocaleLowerCase()){
                matches.push(project)
            }
        });

        if (matches.length === 0) {
            matches.push('No project found')
        }

        return matches;

    }
    selectProject(event){

        // const project = event.currentTarget.innerText;
        this.props.searchClick()

    }

    handleSubmit(){

    }
    
    
    render(){
        const results = this.matches().slice(0,10).map((ele, idx) => {
            return (
                <li key={idx} onClick={()=>this.selectProject()}><Link to={`projects/${ele.id}`}>{ele.title}</Link></li>
            )
        })
        return(
            <div className="close-search" onClick={(event) => {
                this.props.searchClick()
                event.stopPropagation()}}>
                <div className="search-bar">
                    <input
                    onClick={(event) => event.stopPropagation()}
                    className="search-input"
                    onChange={this.update}
                    value={this.state.query}
                    placeholder="Search for projects or categories"
                    >

                    </input>
                    <ul>
                        {results}
                    </ul>
                
                </div>
            </div>
           
        )
    }
}



export default SearchBar;