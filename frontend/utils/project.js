export const getProjects = data => (
    $.ajax({
        url: '/api/projects',
        method: 'GET',
        data: {data}
    })
)
export const getProject = project_id => (
    $.ajax({
        url: `/api/projects/${project_id}`,
        method: 'GET',
        data: {project}
    })
)
export const postProject = project => (
    $.ajax({
        url: '/api/projects',
        method: 'POST',
        data: {project}
    })
)
export const updateProject = project => (
    $.ajax({
        url: `/api/projects/${project.id}`,
        method: 'PATCH',
        data: {project}
    })
)
export const deleteProject = project_id => (
    $.ajax({
        url: `/api/projects/${project_id}`,
        method: 'DELETE'
    })
)



