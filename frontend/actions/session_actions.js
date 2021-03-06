import { postUser, postSession, deleteSession } from "../utils/session_utils";
import { closeModal } from "./modal_actions";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RESET_SESSION_ERRORS = "RESET_SESSION_ERRORS";

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
})
const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})
const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})
const resetSessionErrors = () => ({
    type: RESET_SESSION_ERRORS
})

export const createUser = (formUser) => dispatch => postUser(formUser)
    .then((user) => dispatch(receiveCurrentUser(user)),
    error => {
        
        
        return dispatch(receiveSessionErrors(error.responseJSON))}
    );

export const login = (formUser) => dispatch => postSession(formUser)
    .then((user) => dispatch(receiveCurrentUser(user)),
    error => {
        
        return dispatch(receiveSessionErrors(error.responseJSON))}
    );

export const logout = () => dispatch => deleteSession()
    .then(() => {
        dispatch(logoutCurrentUser())
        dispatch(closeModal())
    });

export const resetErrors = () => dispatch => dispatch(resetSessionErrors());