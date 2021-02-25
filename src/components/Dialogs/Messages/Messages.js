import s from './Messages.module.css'
import Message from './Message/Message'



const Messages =  (props) => {

    let MessageDataMap = props.store.dispatch({type: 'GET-STATE'}).messagesData.map( (el)=>{
            return(
                <Message message = {el.message}/>
            )
        }

    )

    return (
        <div className={s.messages}>
            {MessageDataMap}
        </div>
    )
}
export default Messages;