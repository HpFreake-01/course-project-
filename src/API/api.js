import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY":"d376bb9a-6209-4aa9-a1f9-09b6111e847f"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response =>{
                return response.data;
            })
    },
    follow(usersId){
        return instance.post(`follow/${usersId}`);
        
    },
    unfollow(usersId){
        return instance.delete(`follow/${usersId}`);
    }
}


export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status});
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    }
}

