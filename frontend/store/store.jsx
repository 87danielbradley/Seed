import { createStore, applyMiddleware } from "redux";
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger'

const configureStore = (state={}) => (
    createStore(RootReducer, state, applyMiddleware(thunk))
);



export default configureStore;