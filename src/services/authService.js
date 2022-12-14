import * as requester from "./requester";

const baseURL = 'http://localhost:3030/users';

export const login = (email, password) => {
    return requester.post(`${baseURL}/login`, {email, password});
}

export const register = (regData) => {
    return requester.post(`${baseURL}/register`, regData);
}

export const logout = (accessToken) => {
    return fetch(`${baseURL}/logout`, {
        headers: {
            'X-Authorization': accessToken
        }
    })
}