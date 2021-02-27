import s from './Content.module.css'
import MyPostsContainer from "../../redux/MyPosts-container";

const Cont = (props) => {
    return (
        <ul>
            <MyPostsContainer store = {props.store} />
        </ul>
    )
}

export default Cont;

