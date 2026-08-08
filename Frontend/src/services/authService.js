import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api"
});

export const loginUser = (data) => {
    return API.post("/auth/login", data);
};

export const registerUser = (data) => {
    return API.post("/users/register", data);
};