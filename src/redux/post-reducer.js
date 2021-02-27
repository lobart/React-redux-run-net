const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';


const postReducer = (state, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                post: state.newPostText
            }
            state.contentDataPosts.push(newPost);
            return state;
        case UPDATE_TEXT_POST:
            state.newPostText = action.text;
            return state;
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


export default postReducer;