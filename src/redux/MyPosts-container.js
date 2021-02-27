import MyPosts from "../components/Content/MyPosts/MyPosts";
import {addPostAction, updateTextPostAction} from "./post-reducer";


const MyPostsContainer = (props) => {
    let addPost = (text) => {
        props.store.dispatch(addPostAction(text))
    }
    let onPostChange = (text) => {
        props.store.dispatch(updateTextPostAction(text));
    }
    return(
        <MyPosts newPostText = {props.store.getState().postsPage.newPostText} onPostChange = {onPostChange} addPost = {addPost} postsData = {props.store.getState().postsPage.contentDataPosts} />
    )
}

export default MyPostsContainer;