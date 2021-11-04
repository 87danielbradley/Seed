import React from "react";
import ReactDOM from "react-dom";
import { createProject, editProject, fetchProject, fetchProjects, removeProject } from "./actions/project_actions";
import Root from "./components/root";
import configureStore from "./store/store";
import { deleteProject, getProject, getProjects, postProject, updateProject } from "./utils/project_utils";



document.addEventListener("DOMContentLoaded", ()=>{

    const root = document.getElementById('root')

    window.createProject = createProject
    window.editProject = editProject
    window.fetchProject = fetchProject
    window.fetchProjects = fetchProjects
    window.removeProject = removeProject

    window.postProject = postProject
    window.updateProject = updateProject
    window.getProject = getProject
    window.getProjects = getProjects
    window.deleteProject = deleteProject



    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }
    const store = configureStore(preloadedState)
    window.store = store
    ReactDOM.render(<Root store={store}/>, root)
})