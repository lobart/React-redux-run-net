const ADD_MESSAGE = 'message/ADD-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'message/UPDATE-TEXT-MESSAGE';

let initialState = {
    messagesData: [
        {message: 'Hello!'},
        {message: 'Salut!'},
        {message: 'Ty zdes!'}
    ],
    newMessageText: 'Type new message!'
}
const messageReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            return {...state,
                messagesData : [...state.messagesData, {message: action.text}]};

        case UPDATE_TEXT_MESSAGE:
            return {...state,
                    newMessageText : action.text};
        default: return state;
    }
}

export let addMessageAction = (text) => {
    return(
        {type: ADD_MESSAGE, text:text}
    )
}
export let updateTextMessageAction = (text) => {
    return(
        {type: UPDATE_TEXT_MESSAGE, text:text}
    )
}

export default messageReducer;