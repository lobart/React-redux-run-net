const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';

let initialState = {
    contentDataPosts:
        [{post: 'Hello!'},
            {post: 'Everybody!'},
            {post: 'Vyshe Ruki!'},
            {post: 'Suki Blyadi!'}],
    newPostText: 'Type new Post!'
}
const postReducer = (state = initialState, action) => {
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