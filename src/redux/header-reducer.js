import {userAPI} from "../api/api";

const SET_USER_INFO = 'header/SET_USER_INFO';
const SET_USER_PHOTO = 'header/SET_USER_PHOTO';

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

export let setProfileHeader = () => async(dispatch) => {
    let response = await userAPI.authMe();
    dispatch(setUserInfo(response.data.data));
    let response_id = await userAPI.getProfile(response.data.data.id);
    dispatch(setUserPhoto(response_id.photos.small))
}
export default headerReducer;