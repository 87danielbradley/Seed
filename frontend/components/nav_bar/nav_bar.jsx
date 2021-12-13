import React from "react";
import { Link } from "react-router-dom";
import CreateProjectContainer from "../project/create_project_container";
import { createUser } from "../../actions/session_actions";
import SearchContainer from "../search/search_container";

import ModalContainer from "../modal/modal_container";

class NavBar extends React.Component{
    constructor(props){
       
        super(props);
        this.state = {
            modal: 'closed',
            search: 'closed'
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.searchClick = this.searchClick.bind(this);
    }
    
    componentDidMount(){
        
        this.props.fetchProjects()
        
    }

    openModal(){
        
        this.props.openModal('profile')
        this.setState({modal: 'open'})
    }
    closeModal(){
        this.props.closeModal()
        this.setState({modal: 'closed'})
    }

    searchClick(event){
        // event.preventDefault()
        (this.state.search === "closed" ? this.setState({search: 'open'}) : this.setState({search: 'closed'}))

    }
    
    render(){
        
        return(
            
            <div className="nav-bar">
                <div className="table">
                <Link className="nav-link" to="/discover">Discover</Link>
                <Link className="nav-link" to="/start" >Start a project</Link>
                </div>
                <h1 className="nav-title"><Link className="nav-title" to="/">SEEDBED <i className="fas fa-seedling"></i></Link></h1>
                <div>
                {this.state.search === 'open' ? <SearchContainer key={this.state.search} searchClick={this.searchClick}/> : null} 
                <button className="nav-link nav-button" onClick={this.searchClick}>Search <i className="fas fa-search"></i></button>
                {this.props.currentUser ? (
                    <button className="navbar-logout" onClick={this.openModal}><i className="fas fa-globe"></i></button>
                ):(
                    <Link className='nav-link login-button' to="/login">Log in</Link>
                )}
                </div>
                <ModalContainer key={this.state.modal} closeModal={this.closeModal}/>
            </div>
           
        )
    }
}



export default NavBar;