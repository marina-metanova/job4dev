import * as request from "./requester";

const baseURL = 'http://localhost:3030/data/jobs';

export const getAllJobs = () => {
    return request.get(baseURL);
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