import s from './Messages.module.css'
import Message from './Message/Message'
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requered} from "../../../utils/Validator";
import {TextArea} from "../../common/FormsControls/FormsControls";



const maxLength10 = maxLengthCreator(10);

const addMessageForm =(props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea}
                       name={'newMessageBody'}
                       placeholder={'New messsage'}
                       validate={[requered, maxLength10]}/>
            </div>
            <div>
                <button className={s.button}>Add post</button>
            </div>
        </form>
    )
}

const ReduxMessageForm = reduxForm({form: 'dialogsAddMessageForm'})(addMessageForm);

const Messages =  (props) => {
    let MessageDataMap = props.messagesData.map( (el)=>{
            return(
                <Message message = {el.message}/>
            )
        }
    )
    let onSubmit = (values) => {
        props.addMessage(values.newMessageBody)
        console.log(values.newMessageBody)
    }
    return (
        <div>
            <div>
                {MessageDataMap}
            </div>
            <div>
                <ReduxMessageForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default Messages;