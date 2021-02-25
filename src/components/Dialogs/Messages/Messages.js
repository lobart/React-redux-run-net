import s from './Messages.module.css'
import Message from './Message/Message'
const Messages =  () => {
    return (
        <div className={s.messages}>
            <Message message = 'Hello!'/>
            <Message message = 'Salut!'/>
            <Message message = 'Ty zdes'/>
            <Message message = 'Ya tut!'/>
        </div>
    )
}
export default Messages;