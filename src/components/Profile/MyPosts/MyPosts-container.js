import MyPosts from "./MyPosts";
import {addPostAction, updateTextPostAction} from "../../../redux/profile-reducer";
import {connect} from "react-redux";



let mapStateToProps = (state) =>{
    return({
            newPostText: state.profilePage.newPostText,
            postsData : state.profilePage.contentDataPosts
        }
    )
}
let mapDispatchToProps = (dispatch) =>{
    return{
        onPostChange : (text) => {
            dispatch(updateTextPostAction(text))
        },
        addPost : (text) => {
            dispatch(addPostAction(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;