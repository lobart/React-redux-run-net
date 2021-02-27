import s from './Messages.module.css'
import Message from './Message/Message'
import React from "react";



const Messages =  (props) => {
    let MessageDataMap = props.messagesData.map( (el)=>{
            return(
                <Message message = {el.message}/>
            )
        }
    )
    let newMessageElement  =   React.createRef();
    let addMessage = () => {
        props.addMessage(newMessageElement.current.value);
    }
    let onMessageChange = () => {
        props.onMessageChange(newMessageElement.current.value);
    }
    return (
        <div>
            <div className={s.messages}>
                {MessageDataMap}
            </div>
            <div className={s.messages}>
                <textarea onChange={onMessageChange} ref = {newMessageElement} value={props.newMessageText}></textarea>
            </div>
            <div>
                <button className={s.button} onClick={ addMessage}>Add post</button>
            </div>
        </div>
    )
}
export default Messages;