import profileReducer, {addPostAction} from "./profile-reducer";

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
it ('lenght of post is incremented',()=>{
    let action = addPostAction('Test');

    let newState = profileReducer(initialState,action);

    expect(newState.contentDataPosts.length).toBe(5);

})