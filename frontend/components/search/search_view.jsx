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
                <li className="search-results" key={idx} onClick={()=>this.selectProject()}><Link to={`projects/${ele.id }`}>
                    <div className="flex-row">
                        <img src={ele.url} width="100" height="75"/>
                        <div className="flex-col">
                            <h2>{ele.title}</h2>
                            <h3>by {ele.author}</h3>
                            <h3><strong>{`${Number(100*ele.pledged_amt/ele.goal).toFixed(0)}% funded`}</strong>  {`${Math.ceil(((new Date(ele.end_date.split('T')[0]))-(new Date()))/(1000 * 3600 * 24))} days to go`}</h3>
                        </div>
                    


                    </div>
                    
                    
                    
                    
                    </Link></li>
            )
        })
        return(
            <div className="close-search" onClick={(event) => {
                this.props.searchClick()
                event.stopPropagation()}}>
                <div className="search-bar">
                    <input
                    className="padding-left"
                    onClick={(event) => event.stopPropagation()}
                    className="search-input"
                    onChange={this.update}
                    value={this.state.query}
                    placeholder="Search for projects or categories"
                    >

                    </input>
                    <ul className="padding-left search-results">
                        {results}
                    </ul>
                
                </div>
            </div>
           
        )
    }
}



export default SearchBar;