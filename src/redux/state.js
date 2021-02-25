
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
        newPostText: 'input New Post!'

    },
    _subscriber(){

    },
    subscribe(observer){
        this._subscriber=observer;
    },
    getState() {
        return(this._state);
    },
    addDialog(dialog){
        let newDial = {
            id: 4,
            name : dialog
        }
        this._state.dialogsData.push(newDial)
    },
    addPost(posta){
        let newPost = {
            post: posta
        }
        this._state.contentDataPosts.push(newPost);
        this._subscriber(this);
    },
    updateTextPost(text){
        this._state.newPostText = text;
        this._subscriber(this)}
}

export default store;