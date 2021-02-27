import postReducer from "./post-reducer";
import messageReducer from "./message-reducer";
import dialogsReducer from "./dialogs-reducer";

const GET_STATE = 'GET-STATE';

let store = {

    _state :{
        dialogsData:
            [{"name" : 'Archi', "id":1},
            {"name" : 'Roma', "id":2},
            {"name" : 'Lex', "id":3}],
        postsPage: {
            contentDataPosts:
                [{post: 'Hello!'},
                {post: 'Everybody!'},
                {post: 'Vyshe Ruki!'},
                {post: 'Suki Blyadi!'}],
            newPostText: 'Type new Post!'
        },
        messagesPage: {
            messagesData: [
                {message: 'Hello!'},
                {message: 'Salut!'},
                {message: 'Ty zdes!'}
            ],
            newMessageText: 'Type new message!'
        },
        navData:[
            {name: 'Dialog', url:'/dialogs'},
            {name: 'Profile', url: '/profile'},
            {name: 'Friends', url: '/friends'},
            {name: 'Competitions', url: '/competitions'},

        ]
    },
    _subscriber(){

    },
    subscribe(observer){
        this._subscriber=observer;
    },
    getState(){
        return(this._state);
    },
    dispatch(action){
        this._state.postsPage = postReducer(this._state.postsPage, action);
        this._state.messagesPage     = messageReducer(this._state.messagesPage, action);
        this._state.dialogsData = dialogsReducer(this._state.dialogsData, action);
        this._subscriber();
    }
}

export default store;