import MyPosts from "./MyPosts";
import {addPostAction, updateTextPostAction} from "../../../redux/post-reducer";
import {connect} from "react-redux";



let mapStateToProps = (state) =>{
    return({
            newPostText: state.postsPage.newPostText,
            postsData : state.postsPage.contentDataPosts
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