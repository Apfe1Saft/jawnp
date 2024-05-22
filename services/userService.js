import axios from 'axios';

const API_BASE_URL = 'http://localhost:9090';

export const getUsers = async () => {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
};

export const getUserById = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/users/${id}`);
    return response.data;
};

export const addUser = async (user) => {
    const response = await axios.post(`${API_BASE_URL}/users/addUser`, user);
    return response.data;
};

export const updateUserById = async (id, user) => {
    const response = await axios.put(`${API_BASE_URL}/users/${id}`, user);
    return response.data;
};

export const deleteUserById = async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/users/${id}`);
    return response.data;
};

export const loginUser = async (form) => {
    const response = await axios.post(`${API_BASE_URL}/users/login`, { form });
    return response.data;
};