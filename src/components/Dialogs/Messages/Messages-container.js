import Messages from "./Messages";
import {addMessageAction, updateTextMessageAction} from "../../../redux/message-reducer";
import {connect} from "react-redux";




let mapStateToProps = (state) =>{
    return({
            newMessageText: state.messagesPage.newMessageText,
            messagesData : state.messagesPage.messagesData
        }
    )
}
let mapDispatchToProps = (dispatch) =>{
    return{
        onMessageChange : (text) => {
            dispatch(updateTextMessageAction(text))
        },
        addMessage : (text) => {
            dispatch(addMessageAction(text))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);


export default MessagesContainer;