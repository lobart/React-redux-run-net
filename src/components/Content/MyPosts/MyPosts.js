import s from "./MyPosts.module.css";
import Post from './Post/Post';
import React from "react";
import store from "../../../redux/state";
const MyPosts = (props) => {
    console.log(store)
    let contMap =  props.store.dispatch({type:'GET-STATE'}).contentDataPosts.map( (el)=>{
        return(
            <Post message = {el.post}/>
        )
    });
    let newPostElement  =   React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.store.dispatch({type: 'ADD-POST', text:text})
    }
    let onPostChange = () => {
        props.store.dispatch({type:'UPDATE-TEXT-POST', text: newPostElement.current.value});
    }
    return (
        <ul>
            <div>
            <textarea onChange={onPostChange} ref = {newPostElement} value={props.store.dispatch({type:'GET-STATE'}).newPostText}></textarea>
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

