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
        this.props.createUser(this.state)
            .then( () => this.props.history.push('/'))

    }



    render(){
        return (
            <div className="session-form">
                <h3>Log in</h3>
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
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up!</button>
                </form>
            </div>
        )
    }
}




export default LoginForm;