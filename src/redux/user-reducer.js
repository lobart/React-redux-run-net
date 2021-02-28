const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SETCURRENTPAGE = 'SETCURRENTPAGE';
const SETTOTALUSERSCOUNT = 'SETTOTALUSERSCOUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    users:[],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 2,
    isFetching: false
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
        default: return state;
}}

export let follow = (userID) => ({type:FOLLOW, userID });
export let unfollow = (userID) => ({type:UNFOLLOW, userID});
export let setUsers = (users) => ({type: SETUSERS, users});
export let setCurrentPage = (currentPage) => ({type: SETCURRENTPAGE, currentPage});
export let setTotalUsersCount = (totalUsersCount) => ({type: SETTOTALUSERSCOUNT, totalUsersCount});
export let setToggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default  usersReducer;