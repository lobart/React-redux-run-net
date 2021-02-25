import s from "./MyPosts.module.css";
import Post from './Post/Post';
import React from "react";
import store from "../../../redux/state";
const MyPosts = (props) => {
    console.log(store)
    let contMap = props.store.getState().contentDataPosts.map( (el)=>{
        return(
            <Post message = {el.post}/>
        )
    });
    let newPostElement  =   React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.store.addPost(text)
    }
    let onPostChange = () => {
        props.store.updateTextPost(newPostElement.current.value)
    }
    return (
        <ul>
            <div>
            <textarea onChange={onPostChange} ref = {newPostElement} value={props.store.newPostText}></textarea>
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

