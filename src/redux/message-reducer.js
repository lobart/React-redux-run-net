const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';


const messageReducer = (state, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                message: action.text
            }
            state.messagesData.push(newMessage);
            return state;

        case UPDATE_TEXT_MESSAGE:
            state.newMessageText = action.text;
            return state;
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