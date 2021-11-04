import React from "react";
import { connect } from "react-redux";
import {login} from '../../actions/session_actions'
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
    action: (user) => dispatch(login(user))
})

// export default connect(mSTP, mDTP)(LoginForm)
export default connect(mSTP, mDTP)(SessionForm)
