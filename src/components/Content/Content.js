import s from './Content.module.css'
import MyPosts from './MyPosts/MyPosts'
const Cont = (props) => {
    return (
        <ul>
            <MyPosts store = {props.store} />
        </ul>
    )
}

export default Cont;

