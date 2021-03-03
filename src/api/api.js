import axios from "axios";


const instance=axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY' : '5f4e0eb4-b44d-40ae-82dd-390855809b59'}
})

const userAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => { return (response.data)})},
    toFollow(userId){
        return instance.post(`follow/${userId}`)
            .then(response => { return (response.data)}) },
    toUnFollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => { return (response.data)})
    }
}

export default userAPI;