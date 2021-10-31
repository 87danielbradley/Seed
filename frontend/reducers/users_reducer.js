import { RECEIVE_CURRENT_USER } from "../actions/session";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const currentUser = action.user
            return Object.assign({},state, {[action.user.id]:currentUser} );
        default:
            return state;
    }
}


export default usersReducer;