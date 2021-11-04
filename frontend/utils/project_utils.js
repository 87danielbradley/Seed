export const getProjects = ()=> (
    $.ajax({
        url: '/api/projects',
        method: 'GET'
        
    })
)
// data: {data}
export const getProject = projectId => (
    $.ajax({
        url: `/api/projects/${projectId}/`,
        method: 'GET'
    })
)
export const postProject = project => (
    $.ajax({
        url: '/api/projects/',
        method: 'POST',
        data: {project}
    })
)
export const updateProject = project => (
    $.ajax({
        url: `/api/projects/${project.id}/`,
        method: 'PATCH',
        data: {project}
    })
)
export const deleteProject = projectId => (
    $.ajax({
        url: `/api/projects/${projectId}`,
        method: 'DELETE'
    })
)



