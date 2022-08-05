import * as request from "./requester";

const baseURL = 'http://localhost:3030/data/userApllies';

export const createJobAplly = (jobData) => {
    return request.post(baseURL, jobData);
}