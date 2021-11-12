import React from "react";
import { connect } from "react-redux";
import {login, resetErrors} from '../../actions/session_actions'
import LoginForm from "./login";
import SessionForm from "./form_session";
import { Link } from "react-router-dom";


const mSTP = (state={}, ownProps) => {
    return {
        errors: state.errors.login,
        navLink: <Link to={'/signup'}>Sign up</Link>,
        formType: 'Log in'
    }
}
const mDTP = (dispatch, ownProps) => ({
    login: (user) => dispatch(login(user)),
    action: (user) => dispatch(login(user)),
    resetErrors: () => dispatch(resetErrors())
})


export default connect(mSTP, mDTP)(SessionForm)
