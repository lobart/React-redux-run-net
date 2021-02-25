import s from './Message.module.css'
const Message = (prop) => {
    return (
        <div className={s.message}> {prop.message} </div>
    )
}
export default Message;