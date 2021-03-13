import {authAPI, profileAPI} from "../api/api";
const ADD_POST = 'profile/ADD-POST';
const UPDATE_TEXT_POST = 'profile/UPDATE-TEXT-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
let initialState = {
    contentDataPosts:
        [{post: 'Hello!'},
            {post: 'Everybody!'},
            {post: 'Vyshe Ruki!'},
            {post: 'Suki Blyadi!'}],
    newPostText: 'Type new Post!',
    profile: null,
    status: "Status"
}
const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                contentDataPosts : [...state.contentDataPosts, {post : action.text}]
            };
        case UPDATE_TEXT_POST:
            return {
                ...state,
                newPostText: action.text
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default: return state;
    }

}

export let addPostAction = (text) => {
    return(
        {type: ADD_POST, text:text}
    )
}

export let updateTextPostAction = (text) => {
    return(
        {type: UPDATE_TEXT_POST, text:text}
    )
}

export let setUserProfile = (profile) => {
    return(
        {type: SET_USER_PROFILE, profile: profile}
    )
}

export let setStatus = (status) => {
    return({
    type: SET_STATUS, status:status}
    )
}
export let getProfile = (uID) => async (dispatch) => {
    let response = await profileAPI.getProfile(uID);
        dispatch(setUserProfile(response));
}

export let getStatus = (userId) =>async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response))
}
export let updateStatus = (status) =>async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
}


export default profileReducer;