import s from "./MyPosts.module.css";
import Post from './Post/Post';
import React from "react";
import store from "../../../redux/state";
import {getStateAction, addPostAction, addDialogAction, updateTextPostAction} from '../../../redux/state'
const MyPosts = (props) => {
    console.log(store)
    let contMap =  props.store.dispatch(getStateAction()).contentDataPosts.map( (el)=>{
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
            <textarea onChange={onPostChange} ref = {newPostElement} value={props.store.dispatch(getStateAction()).newPostText}></textarea>
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

