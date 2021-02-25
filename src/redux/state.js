
let store = {
    _state :{
        dialogsData : [
            {name : 'Archi', id:1},
            {name : 'Roma', id:2},
            {name : 'Lex', id:3}
        ],
        contentDataPosts: [
            {post : 'Hello!'},
            {post :'Everybody!'},
            {post: 'Vyshe Ruki!'},
            {post : 'Suki Blyadi!'}
        ],
        messagesData: [
            {message: 'Hello!'},
            {message: 'Salut!'},
            {message: 'Ty zdes!'},
        ],
        newPostText: 'input New Post!'

    },
    _subscriber(){

    },
    subscribe(observer){
        this._subscriber=observer;
    },
    dispatch(action){
        if (action.type === 'ADD-POST'){
            let newPost = {
                post: action.text
            }
            this._state.contentDataPosts.push(newPost);
            this._subscriber(this);

        } else if (action.type === 'UPDATE-TEXT-POST'){
            this._state.newPostText = action.text;
            this._subscriber(this);

        } else if (action.type === 'ADD-DIALOG'){
            let newDial = {
                id: 4,
                name : action.dialog
            }
            this._state.dialogsData.push(newDial)
        } else if (action.type === 'GET-STATE'){
            return(this._state);
        }

    }
}

export default store;