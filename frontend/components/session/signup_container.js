import React from "react";
import { connect } from "react-redux";
import {createUser} from '../../actions/session'


import SignupForm from './signup'

const mSTP = (state = {}, ownProps) => ({});

const mDTP = (dispatch, ownProps) => ({
    createUser: (formUser) => dispatch(createUser(formUser))
});


export default connect(null,mDTP)(SignupForm);

