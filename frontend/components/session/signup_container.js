import React from "react";
import { connect } from "react-redux";
import {createUser, login, resetErrors} from '../../actions/session_actions'
import SessionForm from "./form_session";
import { Link } from "react-router-dom";
import SignupForm from './signup'


const mSTP = (state = {}, ownProps) => {
     return {
        errors: state.errors.login,
        navLink: <Link to={'/login'}>Log in</Link>,
        formType: 'Sign up'
    }
};

const mDTP = (dispatch, ownProps) => ({
    createUser: (formUser) => dispatch(createUser(formUser)),
    login: (user) => dispatch(login(user)),
    action: (formUser) => dispatch(createUser(formUser)),
    resetErrors: () => dispatch(resetErrors())
});


// export default connect(mSTP,mDTP)(SignupForm);
export default connect(mSTP,mDTP)(SessionForm);


