
export const postReward = reward => (
    $.ajax({
        url: '/api/projects/',
        method: 'POST',
        data: {project}
    })
)
export const updateReward = reward => (
    $.ajax({
        url: `/api/Rewards/${reward.id}/`,
        method: 'PATCH',
        data: {project}
    })
)
export const deleteReward= rewardId => (
    $.ajax({
        url: `/api/Rewards/${rewardId}`,
        method: 'DELETE'
    })
)



