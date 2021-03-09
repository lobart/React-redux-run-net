import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";



const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
    userId:null,
    email:null,
    login:null,
    isAuth:false
    }

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default: return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_AUTH_USER_DATA,
    payload: {userId, email, login, isAuth}})
export const getAuthUserData = () => (dispatch) => {
    return authAPI.me().then(response => {
        if (response.data.resultCode ===0){
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id,email,login, true));
        }
})
}

export let login = (email, password, rememberMe) =>(dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(getAuthUserData())
            console.log('Authorization is on!')
        }
        else {
            let message = response.data.messages.length ? response.data.messages[0] : "Some wrong!"
            dispatch(stopSubmit('loginForm',{_error:message }));
            console.log('Invalid authorization!')
        }
    })
}
export let logout = () =>(dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0){
                dispatch(setAuthUserData(null,null,null, false));
            }
        })
}
export default authReducer;
