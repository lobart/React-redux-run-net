import s from "./MyPosts.module.css";
import Post from './Post/Post';
import React from "react";
import {addPostAction, updateTextPostAction} from '../../../redux/post-reducer'


const MyPosts = (props) => {
    console.log(props.store.getState().postsPage)
    let contMap =  props.store.getState().postsPage.contentDataPosts.map( (el)=>{
        return(
            <Post message = {el.post}/>
        )
    });
    let newPostElement  =   React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.store.dispatch(addPostAction(text))
    }
    let onPostChange = () => {
        props.store.dispatch(updateTextPostAction(newPostElement.current.value));
    }
    return (
        <ul>
            <div>
            <textarea onChange={onPostChange} ref = {newPostElement} value={props.store.getState().postsPage.newPostText}></textarea>
            </div>
            <div>
            <button className={s.button} onClick={ addPost}>Add post</button>
            </div>
            <div>
                {contMap}
            </div>
        </ul>
    )
}

export default MyPosts;

