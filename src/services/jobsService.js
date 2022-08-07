import * as request from "./requester";

const baseURL = 'http://localhost:3030/data/jobs';

export const getAllJobs = () => {
    return request.get(`${baseURL}?sortBy=_createdOn%20desc&distinct=category`);
}

export const getJob = (jobID) => {
    return request.get(`${baseURL}/${jobID}`);
}

export const createJob = (jobData) => {
    return request.post(baseURL, jobData);
}

export const editJob = (jobID, jobData) => {
    return request.put(`${baseURL}/${jobID}`, jobData);
}

export const deleteJob = (jobID) => {
    return request.del(`${baseURL}/${jobID}`);
}