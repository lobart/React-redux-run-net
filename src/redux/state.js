const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';
const ADD_DIALOG = 'ADD-DIALOG';
const GET_STATE = 'GET-STATE';


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
        navData:[
            {name: 'Dialog', url:'/dialogs'},
            {name: 'Profile', url: '/profile'},
            {name: 'Friends', url: '/friends'},
            {name: 'Competitions', url: '/competitions'},

        ],
        newPostText: 'input New Post!'

    },
    _subscriber(){

    },
    subscribe(observer){
        this._subscriber=observer;
    },
    dispatch(action){
        if (action.type === ADD_POST){
            let newPost = {
                post: action.text
            }
            this._state.contentDataPosts.push(newPost);
            this._subscriber(this);

        } else if (action.type === UPDATE_TEXT_POST){
            this._state.newPostText = action.text;
            this._subscriber(this);

        } else if (action.type === ADD_DIALOG){
            let newDial = {
                id: 4,
                name : action.dialog
            }
            this._state.dialogsData.push(newDial)
        } else if (action.type === GET_STATE){
            return(this._state);
        }

    }
}

export let addPostAction = (text) => {
        return(
            {type: ADD_POST, text:text}
        )
    }
export let addDialogAction = (text) => {
    return(
        {type: ADD_DIALOG, text:text}
    )
}
export let updateTextPostAction = (text) => {
    return(
        {type: UPDATE_TEXT_POST, text:text}
    )
}
export let getStateAction= () => {
    return({type: GET_STATE})
}
export default store;