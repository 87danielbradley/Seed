import { RECEIVE_REWARD, RECEIVE_REWARDS, REMOVE_REWARD } from "../actions/reward_actions";

const rewardsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_REWARDS:
            return action.rewards;
        case RECEIVE_REWARD:
            return Object.assign({}, state, {[action.reward.id]: action.reward})
        case REMOVE_REWARD:
            let nextState = Object.assign({}, state)
            delete nextState.entities[action.rewardId];
            return nextState;
        default:
            return state;
    }
}


export default rewardsReducer;