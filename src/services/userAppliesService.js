import * as request from "./requester";

const baseURL = 'http://localhost:3030/data/userApplies';

export const createJobApply = (jobID, jobTitle, userData) => { 
    return request.post(baseURL, {jobID, jobTitle, user: userData});
} 

export const getAllApplies = () => {
    return request.get(baseURL);
}

export const getByJobID = (jobID) => {
    const relations = encodeURIComponent(`userApplies=_id:users`);
    const search = encodeURIComponent(`jobID=${jobID}`)

    return request.get(`${baseURL}?where=${search}&load=${relations}`);
}