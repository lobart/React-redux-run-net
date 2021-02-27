import s from './Messages.module.css'
import Message from './Message/Message'
import {addMessageAction, updateTextMessageAction} from '../../../redux/message-reducer'
import React from "react";



const Messages =  (props) => {
    let MessageDataMap = props.store.getState().messagesPage.messagesData.map( (el)=>{
            return(
                <Message message = {el.message}/>
            )
        }
    )
    let newMessageElement  =   React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.store.dispatch(addMessageAction(text))
    }
    let onMessageChange = () => {
        props.store.dispatch(updateTextMessageAction(newMessageElement.current.value));
    }
    console.log(props.store.getState().messagesPage.newMessageText)
    return (
        <div>
            <div className={s.messages}>
                {MessageDataMap}
            </div>
            <div className={s.messages}>
                <textarea onChange={onMessageChange} ref = {newMessageElement} value={props.store.getState().messagesPage.newMessageText}></textarea>
            </div>
            <div>
                <button className={s.button} onClick={ addMessage}>Add post</button>
            </div>
        </div>
    )
}
export default Messages;