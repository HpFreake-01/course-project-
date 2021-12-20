import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY":"d376bb9a-6209-4aa9-a1f9-09b6111e847f"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const usersAPI = {
    getUsers(page, pageSize) {
        return instance.get(`users?page=${page}&count=${pageSize}`)
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
    },
    savePhoto(file){
        const formData = new FormData();
        formData.append('image', file)
        return instance.put(`profile/photo`,formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`,{email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

