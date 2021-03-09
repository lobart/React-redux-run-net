import axios from "axios";


const instance=axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY' : 'ed386668-28b4-45de-98f4-ed82c5c0ecc4'}
})

export const userAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => { return (response.data)})},
    getProfile(uID){
        console.warn('Obsolete warning! Please, use new method!')
        return profileAPI.getProfile(uID)
    },
    authMe(){
         console.warn('Obsolete warning! Please, use new method!')
         return authAPI.me();
    }
}

export const followAPI = {
    toFollow(userId){
        return instance.post(`follow/${userId}`)
            .then(response => { return (response.data)}) },
    toUnFollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => { return (response.data)})
    },
}

export const  profileAPI = {
    getProfile(uID){
        return instance.get(`profile/${uID}`)
            .then(response => { return (response.data)})
    },
    getStatus(uID){
        return instance.get(`profile/status/${uID}`)
            .then(response => { return (response.data)})
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
    }

}

export const authAPI = {
    me(){
        return instance.get(`auth/me`);
    },
    login(email, password, remem_me){
        return instance.post('auth/login', {email:email, password: password, rememberMe: remem_me});
    },
    logout(){
        return instance.delete('auth/login');
    }
}
