import s from "./MyPosts.module.css";
import Post from './Post/Post';
import React from "react";


const MyPosts = (props) => {
    let contMap =  props.postsData.map( (el)=>{
        return(
            <Post message = {el.post}/>
        )
    });
    let newPostElement  =   React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    }
    let onPostChange = () => {
        props.onPostChange(newPostElement.current.value);
    }
    return (
        <ul>
            <div>
            <textarea onChange={onPostChange} ref = {newPostElement} value={props.newPostText}></textarea>
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

