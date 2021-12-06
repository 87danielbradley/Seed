
export const postReward = reward => (
    $.ajax({
        url: '/api/rewards/',
        method: 'POST',
        data: {reward}
    })
)
export const updateReward = reward => (
    $.ajax({
        url: `/api/rewards/${reward.id}/`,
        method: 'PATCH',
        data: {reward}
    })
)
export const deleteReward= rewardId => (
    $.ajax({
        url: `/api/rewards/${rewardId}`,
        method: 'DELETE'
    })
)

export const getRewards = (category)=> (
    $.ajax({
        url: '/api/rewards',
        method: 'GET',
        category
    })
)

export const getReward = rewardId => (
    $.ajax({
        url: `/api/rewards/${rewardtId}/`,
        method: 'GET'
    })
)

