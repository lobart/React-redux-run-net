import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";



const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized:null
    }

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                initialized: true
            }
        default: return state;
    }
}

export const setInitialized = (initialized) => ({type: SET_INITIALIZED,
    initialized: initialized})
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(
        () => {
            dispatch(setInitialized())})
    }
export default appReducer;
