import { postPledge } from "../utils/pledge_util";

export const RECEIVE_PLEDGE = 'RECEIVE_PLEDGE';



const receivePledge = (pledge) => ({
    type: RECEIVE_PROJECT,
    pledge
});



export const createPledge = (pledgeForm) => dispatch => postProject(pledgeForm)
    .then((pledge) => dispatch(receiveProject(pledge)))


