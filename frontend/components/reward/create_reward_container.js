import React from "react";
import { connect } from "react-redux";

import RewardForm from './reward_form';
import {createReward} from '../../actions/reward_actions';

const mSTP= (state = {}, ownProps) => {
   
    return {reward: {
        pledge_amount: '',
        description: '',
        title: '',
        delivery_date: '',
        limit: '',
        project_id: '',
        shipping_type: ''
    },
    currentUser: state.session.currentUser,
    formType: 'Create Reward'}
    
};

const mDTP = (dispatch, ownProps) => ({
    createReward: (reward) => dispatch(createReward(reward))
});

export default connect(mSTP,mDTP)(RewardForm);