import Messages from "../components/Dialogs/Messages/Messages";
import {addMessageAction, updateTextMessageAction} from "./message-reducer";

const MessagesContainer = (props) => {
    let addMessage = (text) => {
        props.store.dispatch(addMessageAction(text))
    }
    let onMessageChange = (text) => {
        props.store.dispatch(updateTextMessageAction(text));
    }
    return(
        <Messages newMessageText = {props.store.getState().messagesPage.newMessageText} onMessageChange = {onMessageChange} addMessage = {addMessage} messagesData ={props.store.getState().messagesPage.messagesData} />
    )
}
export default MessagesContainer;