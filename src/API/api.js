import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY":"d376bb9a-6209-4aa9-a1f9-09b6111e847f"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const getUsersApi = (currentPage, pageSize) =>{
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
        return response.data;
    });
}