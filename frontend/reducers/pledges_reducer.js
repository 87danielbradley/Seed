import { RECEIVE_PLEDGE} from "../actions/pledge_action";

const rewardsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        
        case RECEIVE_PLEDGE:
            return Object.assign({}, state, {[action.pledge.id]: action.pledge})
        
        default:
            return state;
    }
}


export default rewardsReducer;