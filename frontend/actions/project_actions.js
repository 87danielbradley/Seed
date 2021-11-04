import { deleteProject, getProject, getProjects, postProject, updateProject } from "../utils/project_utils";

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
const delProject = (projectId) => ({
    type: REMOVE_PROJECT,
    projectId
});

export const fetchProjects = () => dispatch => getProjects()
    .then((projects) => dispatch(receiveProjects(projects)))

export const fetchProject = (projectId) => dispatch => getProject(projectId)
    .then((project) => dispatch(receiveProject(project)))

export const createProject = (projectForm) => dispatch => postProject(projectForm)
    .then((project) => dispatch(receiveProject(project)))

export const removeProject = (projectId) => dispatch => deleteProject(projectId)
    .then(() => dispatch(delProject(projectId)))

export const editProject = (projectForm) => dispatch => updateProject(projectForm)
    .then((project) => dispatch(receiveProject(project)))


