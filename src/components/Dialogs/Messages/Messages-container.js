import Messages from "./Messages";
import {addMessageAction, updateTextMessageAction} from "../../../redux/message-reducer";
import {addPostAction, updateTextPostAction} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "../../Profile/MyPosts/MyPosts";



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