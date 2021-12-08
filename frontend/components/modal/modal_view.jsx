import React from "react";


export default class ModalView extends React.Component{
    

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