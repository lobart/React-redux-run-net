import s from "./MyPosts.module.css";
import Post from './Post/Post';
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requered} from "../../../utils/Validator";
import {TextArea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const addPostForm =(props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea}
                       name={'newPostBody'}
                       placeholder={'New post'}
                       validate={[requered, maxLength10]}
                ></Field>
            </div>
            <div>
                <button className={s.button}>Add post</button>
            </div>
        </form>
    )
}

const ReduxPostForm = reduxForm({form: 'dialogsAddPostForm'})(addPostForm);

const MyPosts = React.memo((props) => {
    let contMap =  props.postsData.map( (el)=>{
        return(
            <Post message = {el.post}/>
        )
    });
    let onSubmit = (values) => {
        props.addPost(values.newPostBody)
        console.log(values.newPostBody)
    }
    return (
        <div>
            <ReduxPostForm onSubmit={onSubmit}/>
            <div>
                {contMap}
            </div>
        </div>
    )
})

export default MyPosts;

