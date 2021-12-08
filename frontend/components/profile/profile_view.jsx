import React from 'react';

class ProfileView extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
        
    }
    componentDidMount(){
        
    }

    handleClick(){
        this.props.logout()
            .then(()=>this.props.closeModal)
    }
    render() {
        return (
        <div className="profile-container">
            <div>YOUR ACCOUNT</div>
            <div>CREATED PROJECTs</div>
            <div></div>
            <buton onClick={this.handleClick}>Log out</buton>
        </div>
        );
    }
}

export default ProfileView;
