import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session";

const _nullSession = {
    currentUser: null
}

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        case RECEIVE_CURRENT_USER:
            const currentUser = action.user
            return Object.assign({}, {currentUser} );
        default:
            return state;
    }
}


export default sessionReducer;