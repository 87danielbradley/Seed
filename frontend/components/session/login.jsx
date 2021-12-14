import React from "react";

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',

        }
        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    update(field){
        return (event) => {
            this.setState({[field]: event.currentTarget.value})
        }
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.login(this.state)
            .then( () => this.props.history.push('/'))

    }
    sessionErrors(){
        return(
            <ul>
                {this.props.errors.map((error,i) => (
                    <li key={`${error}-${i}`}>{error}</li>
                ))}
            </ul>
        )
    }


    render(){
        return (
            <div className="session-form">
                <h3 className="padding-left">Log in</h3>
                {this.sessionErrors()}
                <form>
                    <label>Email:
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <label>Password:
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Log in</button>
                </form>
            </div>
        )
    }
}




export default LoginForm;