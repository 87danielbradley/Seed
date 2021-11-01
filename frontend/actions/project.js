import { deleteProject, getProject, getProjects, postProject, updateProject } from "../utils/project";

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

const receiveProjects = (projects) => ({
    type: RECEIVE_PROJECTS,
    projects
});
const receiveProject = (project) => ({
    type: RECEIVE_PROJECT,
    project
});
const removeProject = (projectId) => ({
    type: REMOVE_PROJECT,
    projectId
});

export const createProject = (projectForm) => dispatch => postProject(projectForm)
    .then((project) => dispatch(receiveProject(project)))

export const removeProject = (projectId) => dispatch => deleteProject(projectId)
    .then(() => dispatch(removeProject(projectId)))

export const editProject = (projectForm) => dispatch => updateProject(projectForm)
    .then((project) => dispatch(receiveProject(project)))

export const fetchProjects = (data) => dispatch => getProjects(data)
    .then((projects) => dispatch(receiveProjects(projects)))

export const fetchProject = (projectId) => dispatch => getProject(projectId)
    .then((project) => dispatch(receiveProject(project)))


