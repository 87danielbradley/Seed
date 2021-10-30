import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import { postUser, postSession, deleteSession } from "./utils/session";

document.addEventListener("DOMContentLoaded", ()=>{
    window.postUser = postUser;
    window.postSession = postSession;
    window.deleteSession = deleteSession;
    const root = document.getElementById('root')

    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }
    const store = configureStore(preloadedState)
    ReactDOM.render(<Root store={store}/>, root)
})