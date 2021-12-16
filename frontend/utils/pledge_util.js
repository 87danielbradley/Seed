
export const postPledge = pledge => (
    $.ajax({
        url: '/api/pledges/',
        method: 'POST',
        data: {pledge}
    })
)




