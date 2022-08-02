import * as request from "./requester";

const baseURL = 'http://localhost:3030';

export const getAllJobs = () => {
    return request.get(`${baseURL}/data/jobs`);
}