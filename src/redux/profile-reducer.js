const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
let initialState = {
    contentDataPosts:
        [{post: 'Hello!'},
            {post: 'Everybody!'},
            {post: 'Vyshe Ruki!'},
            {post: 'Suki Blyadi!'}],
    newPostText: 'Type new Post!',
    profile: null
}
const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                contentDataPosts : [...state.contentDataPosts, {post : state.newPostText}]
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

export let setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})

export default profileReducer;