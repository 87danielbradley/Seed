import { deleteReward, getReward, getRewards, postReward, updateReward } from "../utils/reward_utils";


export const RECEIVE_REWARDS = 'RECEIVE_REWARDS';
export const RECEIVE_REWARD = 'RECEIVE_REWARD';
export const REMOVE_REWARD = 'REMOVE_REWARD';

const receiveRewards = (rewards) => ({
    type: RECEIVE_REWARDS,
    rewards
});
const receiveReward = (reward) => ({
    type: RECEIVE_REWARD,
    reward
});
const delReward = (rewardId) => ({
    type: REMOVE_REWARD,
    rewardId
});

export const fetchRewards = (data) => dispatch => getRewards(data)
    .then((rewards) => dispatch(receiveRewards(rewards)))

export const fetchReward = (rewardId) => dispatch => getReward(rewardId)
    .then((reward) => dispatch(receiveReward(reward)))

export const createReward = (rewardForm) => dispatch => postReward(rewardForm)
    .then((reward) => dispatch(receiveReward(reward)))

export const removeReward = (rewardId) => dispatch => deleteReward(rewardId)
    .then(() => dispatch(delReward(rewardId)))

export const editReward = (rewardForm) => dispatch => updateReward(rewardForm)
    .then((reward) => dispatch(receiveReward(reward)))


