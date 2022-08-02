import * as requester from "./requester";

const baseURL = 'http://localhost:3030/users';

export const login = (email, password) => {
    return requester.post(`${baseURL}/login`, {email, password});
}