import React from "react";
import ProfileContainer from "../profile/profile_container";

export default class ModalView extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if(!this.props.modal){
            
            return null;
        } 
        let component;
        switch (this.props.modal) {
            case 'profile':
                component = <ProfileContainer />;
                break;
            default:
                return null;
        }
        return(
            <div className="modal-main" onClick={this.props.closeModal}>
                <div className="modal-container" onClick={event => event.stopPropagation()}>
                    { component }
                    
                </div>
            </div>
        )
    }

}