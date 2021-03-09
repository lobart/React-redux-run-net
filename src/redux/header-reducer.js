import {userAPI} from "../api/api";

const SET_USER_INFO = 'SET_USER_INFO';
const SET_USER_PHOTO = 'SET_USER_PHOTO';

let initialState = {
    userData:{
        id: null,
        login: null
    },
    userPhoto: null
}

const headerReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_INFO:
            return{
                ...state,
                userData:{
                    id : action.userData.id,
                    login : action.userData.login
                },
            };
        case SET_USER_PHOTO:
            return{
                ...state,
                userPhoto:action.userPhoto
            };
        default: return state;
    }
}

export let setUserInfo = (userData) => ({type:SET_USER_INFO, userData})
export let setUserPhoto = (userPhoto) => ({type:SET_USER_PHOTO, userPhoto})

export let setProfileHeader = () => (dispatch) => {
    userAPI.authMe().then(response => {
        dispatch(setUserInfo(response.data.data));
        userAPI.getProfile(response.data.data.id).then(response => {
            dispatch(setUserPhoto(response.photos.small))
        })
    })
}
export default headerReducer;