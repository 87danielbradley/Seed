import React from "react";
import { connect } from "react-redux";
import {login} from '../../actions/session_actions'
import LoginForm from "./login";


const mSTP = (state={}, ownProps) => ({

})
const mDTP = (dispatch, ownProps) => ({
    login: (user) => dispatch(login(user))
})

export default connect(null, mDTP)(LoginForm)
