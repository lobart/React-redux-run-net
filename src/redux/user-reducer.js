import {userAPI,followAPI} from "../api/api";

const FOLLOW = 'user/FOLLOW';
const UNFOLLOW = 'user/UNFOLLOW';
const SETUSERS = 'user/SETUSERS';
const SETCURRENTPAGE = 'user/SETCURRENTPAGE';
const SETTOTALUSERSCOUNT = 'user/SETTOTALUSERSCOUNT';
const TOGGLE_IS_FETCHING = 'user/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FPROGRESS = 'user/TOGGLE_IS_FPROGRESS';

let initialState = {
    users:[],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 2,
    isFetching: false,
    followingProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW :
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id === action.userID){
                        return {...u, followed: true};
                    } else {
                        return u;
                    }
                })
            }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id === action.userID){
                        return {...u, followed: false};
                    } else {
                        return u;
                    }
                })
            }
        case SETUSERS:
            return {...state, users : action.users};
        case SETCURRENTPAGE:
            return {...state, currentPage: action.currentPage};
        case SETTOTALUSERSCOUNT:
            return {...state, totalUsersCount: action.totalUsersCount};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FPROGRESS:
            return {...state,
                followingProgress : action.isFetching
                    ? [...state.followingProgress, action.userID]
                    : [...state.followingProgress.filter(id => id != action.userID)]
                 };
        default: return state;
}}

export let follow = (userID) => ({type:FOLLOW, userID });
export let unfollow = (userID) => ({type:UNFOLLOW, userID});
export let setUsers = (users) => ({type: SETUSERS, users});
export let setCurrentPage = (currentPage) => ({type: SETCURRENTPAGE, currentPage});
export let setTotalUsersCount = (totalUsersCount) => ({type: SETTOTALUSERSCOUNT, totalUsersCount});
export let setToggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export let setToggleIsFProgress = (isFetching, userID) => ({type: TOGGLE_IS_FPROGRESS, isFetching, userID});

export let getUsers = (pageNumber, pageSize) => { return async (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(setToggleIsFetching(true));

    let data = await userAPI.getUsers(pageNumber, pageSize);
        dispatch(setToggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount))
}}

export let onUnfollow = (uID) => { return async (dispatch) => {
    dispatch(setToggleIsFProgress(true, uID));
    let data = await followAPI.toUnFollow(uID);
        if(data.resultCode == 0){
            dispatch(unfollow(uID))
        }
        dispatch(setToggleIsFProgress(false, uID));
}}
export let onFollow = (uID) => { return async (dispatch) => {
    dispatch(setToggleIsFProgress(true, uID));
    let data = await followAPI.toFollow(uID);
        if(data.resultCode == 0){
            dispatch(follow(uID))
        }
        dispatch(setToggleIsFProgress(false, uID));
}}
export default  usersReducer;