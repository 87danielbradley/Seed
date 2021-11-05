import React, {useState} from "react";

class SessionForm extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        name: '',
        email: '',
        password: '',
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this)
    }
    update(field){
        return (event) => {
            this.setState({[field]: event.currentTarget.value})
        }
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state)
            .then( () => this.props.history.push('/'))

    }
    demoUser(e){
        e.preventDefault();
        this.setState({email: "starwars"})
        this.setState({password: "starwars"})
        this.props.login(this.state)
            .then( () => this.props.history.push('/'))
    }
    sessionErrors(){
        return(
            <ul >
                {this.props.errors.map((error,i) => (
                    <li key={`${error}-${i}`}>{error}</li>
                ))}
            </ul>
           
            
        )
    }
    

    render(){
        return (
            <div className='session-form-window' >
                <div className="session-form">

                    {this.props.formType === 'Sign up'?
                        <div className="form-item">
                            <h3 className="line-below">Have an account? {this.props.navLink}</h3>
                        </div>: 
                        null
                    }
                    
                    {this.props.formType === 'Sign up'?
                        <div className="form-item">
                            <h3 className="form-item">{this.props.formType}</h3>
                        </div>: 
                        <div>
                            <h3 className="form-item session-form-title">{this.props.formType}</h3>
                            {this.sessionErrors()}
                        </div>
                    }
                    
                    


                    <form className="form-session">
                    {this.props.formType === 'Sign up'?
                            <div className="form-item">
                            <input 
                                type="text"
                                className="form-item form-input"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={this.update('name')}
                            />
                            </div>
                        : null}
                        <div className="form-item">
                        <input 
                            type="text"
                            className="form-item form-input"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                        </div>
                        
                        <div className="form-item">
                        <input 
                            type="password"
                            placeholder="Password"
                            className="form-item form-input"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                        </div>
                        
                        {this.props.formType === 'Sign up'?<div className="form-item display-flex">
                            
                            <label className="form-item">
                            <input 
                                type="checkbox"
                            />Send me a weekly mix of handpicked projects, plus occasional SeedBed news
                            </label> 
                        <label className="form-item">
                            <input 
                                type="checkbox"
                            />Contact me about participating in SeedBed research
                        </label> 
                        </div>: <div><label className="form-item">
                            <input 
                                type="checkbox"
                            />Remember me
                        </label>
                        <div className="form-item">
                            <p>New to SeedBed? {this.props.navLink}</p>
                        </div>
                        <div className="form-item">
                            <p>This site is protected by reCAPTCHA and the <a href="/" >Google Privacy Policy</a> and <a href="/" >Terms of Service</a> apply</p>
                        </div>
                        </div>}
                        
                        {this.props.formType === 'Sign up'?<button className="form-button form-item session-form-submit translatey-med" onClick={this.handleSubmit} value={this.props.formType}>Create account</button>:<button className="form-button form-item session-form-submit" onClick={this.handleSubmit} value={this.props.formType}>{this.props.formType}</button> }
                        {<button className="form-item demo-button translatey-med" onClick={this.demoUser} value={'Demo User'}>Demo User</button>}
                        
                    </form>
                </div>
            </div>
        )
    }


}

export default SessionForm;


