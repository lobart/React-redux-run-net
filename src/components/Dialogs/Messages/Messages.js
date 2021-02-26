import s from './Messages.module.css'
import Message from './Message/Message'
import {getStateAction} from '../../../redux/state'


const Messages =  (props) => {

    let MessageDataMap = props.store.dispatch(getStateAction()).messagesData.map( (el)=>{
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