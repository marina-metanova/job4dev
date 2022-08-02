import * as request from "./requester";

const baseURL = 'http://localhost:3030/data/jobs';

export const getAllJobs = () => {
    return request.get(baseURL);
}

export const createJob = (jobData) => {
    return request.post(baseURL, jobData)
}